import { Router } from 'express'
import {
  getArticles,
  getArticle,
  createArticleOrArticles,
  deleteArticleOrArticles,
  updateArticleOrArticles,
  replaceArticleOrArticles
} from '../controllers/articles.mjs'
import { validateArticleData } from '../middlewares/validateArticle.mjs'
import { ensureAuthenticated } from '../middlewares/authMiddleware.mjs'

const articlesRouter = Router()

articlesRouter
  .route('/')
  .get(ensureAuthenticated, getArticles)
  .post(ensureAuthenticated, validateArticleData, createArticleOrArticles)
  .delete(ensureAuthenticated, deleteArticleOrArticles)
  .put(ensureAuthenticated, validateArticleData, updateArticleOrArticles)
  .patch(ensureAuthenticated, validateArticleData, replaceArticleOrArticles)

articlesRouter
  .route('/:id')
  .get(ensureAuthenticated, getArticle)
  .delete(ensureAuthenticated, deleteArticleOrArticles)
  .put(ensureAuthenticated, validateArticleData, updateArticleOrArticles)
  .patch(ensureAuthenticated, validateArticleData, replaceArticleOrArticles)

export default articlesRouter
