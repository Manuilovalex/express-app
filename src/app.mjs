import express from 'express'
import router from './routes/index.mjs'
import { errorHandler } from './middlewares/errorHandler.mjs'
import { logger } from './middlewares/logger.mjs'

const PORT = process.env.PORT || 3000
const app = express()

app.use(logger)

app.use(express.json())
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
