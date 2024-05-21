export const validateUserData = (req, res, next) => {
  const { username, email } = req.body

  if (!username || !email) {
    return res.status(400).send('Invalid data. Username and email are required.')
  }

  next()
}
