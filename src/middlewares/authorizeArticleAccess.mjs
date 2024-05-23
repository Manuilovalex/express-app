export const authorizeArticleAccess = (req, res, next) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send('Access denied. No credentials sent.')
  }

  const token = authHeader.split(' ')[1]

  if (token !== 'token123') {
    return res.status(403).send('Access denied. Invalid token.')
  }

  next()
}
