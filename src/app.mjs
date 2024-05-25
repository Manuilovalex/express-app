import express from 'express'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
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
app.use(express.static(join(__dirname, 'public')))

app.set('views', join(__dirname, 'views'))

app.set('view engine', 'pug')

app.engine('ejs', ejs.renderFile)

app.use(router)

app.use((req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  next(error)
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
