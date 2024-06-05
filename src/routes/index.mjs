import { Router } from 'express'
import { getRootHandler } from '../controllers/root.mjs'
import usersRouter from './users.mjs'
import articlesRouter from './articles.mjs'
import authRouter from './authRoutes.mjs'

const router = Router()

router.get('/', getRootHandler)
router.use('/users', usersRouter)
router.use('/articles', articlesRouter)
router.use('/register', authRouter)
router.use('/login', authRouter)

router.post('/theme', (req, res) => {
  const { theme } = req.body
  if (!theme) {
    return res.status(400).send('Theme is required')
  }
  res.cookie('theme', theme, { maxAge: 900000, httpOnly: true })
  res.send(`Theme set to ${theme}`)
})

router.get('/theme', (req, res) => {
  const theme = req.cookies.theme || 'default'
  res.send(`Current theme is ${theme}`)
})

export default router
