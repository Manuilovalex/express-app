import { Router } from 'express'

const protectedRoutes = Router()

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

protectedRoutes.get('/', ensureAuthenticated, (req, res) => {
  res.json({ message: 'You have accessed a protected route' })
})

export default protectedRoutes
