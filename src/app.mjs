import express from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import router from './routes/index.mjs'
import { errorHandler } from './middlewares/errorHandler.mjs'
import { logger } from './middlewares/logger.mjs'
import ejs from 'ejs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = process.env.PORT || 3000
const app = express()

app.use(morgan('dev'))

app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(join(__dirname, 'public')))

app.set('views', join(__dirname, 'views'))

app.set('view engine', 'pug')

app.engine('ejs', ejs.renderFile)

app.use((req, res, next) => {
  res.locals.theme = req.cookies.theme || 'light'
  next()
})

app.use(router)

app.post('/theme', (req, res) => {
  const { theme } = req.body
  res.cookie('theme', theme, { maxAge: 900000, httpOnly: true })
  res.redirect('back')
})

app.use((req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  next(error)
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
