import { Router } from 'express'
import {
  deleteArticleByIdHandler,
  getArticleByIdHandler,
  getArticlesHandler,
  postArticlesHandler,
  putArticleByIdHandler
} from '../controllers/articles.mjs'
import { validateArticleData } from '../middlewares/validateArticle.mjs'
import { checkArticlesEmpty } from '../middlewares/checkArticlesEmpty.mjs'
import { ensureAuthenticated } from '../middlewares/authMiddleware.mjs'

const articlesRouter = Router()

articlesRouter
  .route('/')
  .get(ensureAuthenticated, checkArticlesEmpty, getArticlesHandler)
  .post(ensureAuthenticated, validateArticleData, postArticlesHandler)

articlesRouter
  .route('/:articleId')
  .get(ensureAuthenticated, getArticleByIdHandler)
  .delete(ensureAuthenticated, deleteArticleByIdHandler)
  .put(ensureAuthenticated, validateArticleData, putArticleByIdHandler)

export default articlesRouter
