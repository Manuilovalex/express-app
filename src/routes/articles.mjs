import { Router } from 'express'
import { createArticle, getArticles, getArticle, deleteArticle, updateArticle, createArticles } from '../controllers/articles.mjs'
import { validateArticleData } from '../middlewares/validateArticle.mjs'
import { ensureAuthenticated } from '../middlewares/authMiddleware.mjs'

const articlesRouter = Router()

articlesRouter
  .route('/')
  .get(ensureAuthenticated, getArticles)
  .post(ensureAuthenticated, validateArticleData, createArticle, createArticles)

articlesRouter
  .route('/:id')
  .get(ensureAuthenticated, getArticle)
  .delete(ensureAuthenticated, deleteArticle)
  .put(ensureAuthenticated, validateArticleData, updateArticle)

export default articlesRouter
