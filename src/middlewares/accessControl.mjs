export const checkArticleAccess = (req, res, next) => {
  const articleId = req.params['articleId']

  if (!articleId) {
    return res.status(403).send('Access denied. No article ID provided.')
  }

  next()
}
