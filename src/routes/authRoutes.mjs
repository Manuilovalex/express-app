import { Router } from 'express'
import { passport } from '../config/passport-config.mjs'
import { createUser} from '../services/userService.mjs'
import {forwardAuthenticated } from '../middlewares/authMiddleware.mjs'

const authRouter = Router()

authRouter.get('/login', forwardAuthenticated, (req, res) => {
  res.render('login', { error: req.flash('error') })
})

authRouter.get('/register', forwardAuthenticated, (req, res) => {
  res.render('register', { error: req.flash('error') })
})

authRouter.post('/register', async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    const user = await createUser({ username, email, password })
    req.login(user, (err) => {
      if (err) return next(err)
      return res.redirect('/login')
    })
  } catch (error) {
    req.flash('error', 'Registration failed.')
    return res.redirect('/register')
  }
})

authRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next)
})

authRouter.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
})

export default authRouter