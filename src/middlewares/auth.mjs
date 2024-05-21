export const authenticate = (req, res, next) => {
  const userId = req.headers['user-id']

  if (!userId) {
    return res.status(401).send('Access denied. No user ID provided.')
  }

  req.user = { id: userId }
  next()
}
