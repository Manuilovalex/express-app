export function ensureAuthenticated(req, res, next) {
  console.log('ensureAuthenticated called:', req.isAuthenticated(), req.user, req.session)

  // Проверяем, аутентифицирован ли пользователь или только что зарегистрирован
  if (req.isAuthenticated() || req.session.justRegistered) {
    // Если пользователь только что зарегистрировался, удаляем флаг
    if (req.session.justRegistered) {
      delete req.session.justRegistered
    }
    return next()
  }

  // Если пользователь не аутентифицирован и не только что зарегистрирован, перенаправляем на страницу входа
  res.redirect('/login')
}

export function forwardAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    return next()
  }
  res.redirect('/')
}
