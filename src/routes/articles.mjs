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
import { authorizeArticleAccess } from '../middlewares/authorizeArticleAccess.mjs'

const articlesRouter = Router()

articlesRouter
  .route('/')
  .get(authorizeArticleAccess, checkArticlesEmpty, getArticlesHandler)
  .post(authorizeArticleAccess, validateArticleData, postArticlesHandler)

articlesRouter
  .route('/:articleId')
  .get(authorizeArticleAccess, getArticleByIdHandler)
  .delete(authorizeArticleAccess, deleteArticleByIdHandler)
  .put(authorizeArticleAccess, validateArticleData, putArticleByIdHandler)

export default articlesRouter
