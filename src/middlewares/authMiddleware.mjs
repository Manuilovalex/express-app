export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/')
}

export function forwardAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}