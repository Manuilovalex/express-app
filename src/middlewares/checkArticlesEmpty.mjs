import { articles } from '../data/articles.mjs'

export const checkArticlesEmpty = (req, res, next) => {
  if (articles.length === 0) {
    return res.status(200).send('No articles found.')
  }
  next()
}
