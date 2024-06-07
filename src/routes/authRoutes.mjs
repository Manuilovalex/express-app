import { Router } from 'express'
import { passport } from '../config/passport-config.mjs'
import { createUser } from '../services/userService.mjs'
import { forwardAuthenticated } from '../middlewares/authMiddleware.mjs'

const authRouter = Router()

authRouter.get('/login', forwardAuthenticated, (req, res) => {
  res.render('login', { error: req.flash('error') })
})

authRouter.get('/register', forwardAuthenticated, (req, res) => {
  res.render('register', { error: req.flash('error') })
})

authRouter.use((req, res, next) => {
  console.log('Current session before saving:', req.session)
  next()
})

authRouter.post('/register', async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    const user = await createUser({ username, email, password })

    req.session.justRegistered = true

    req.login(user, (err) => {
      if (err) return next(err)
      console.log('User logged in:', req.user)
      console.log('Session ID:', req.sessionID)
      req.session.save((err) => {
        if (err) return next(err)
        console.log('Session saved:', req.sessionID)
        return res.redirect('/')
      })
    })
  } catch (error) {
    req.flash('error', 'Registration failed.')
    return res.redirect('/register')
  }
})

authRouter.use((req, res, next) => {
  console.log('Current session after saving:', req.session)
  next()
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
