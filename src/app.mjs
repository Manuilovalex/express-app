import express from 'express'
import morgan from 'morgan'
import router from './routes/index.mjs'

const PORT = 3000
const app = express()

app.use(morgan('dev'))

app.use(router)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Error')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
