export const validateArticleData = (req, res, next) => {
  const { title, content } = req.body
  
  if (!title || !content) {
    return res.status(400).send('Invalid data. Title and content are required.')
  }
  next()
}
