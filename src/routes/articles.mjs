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

const articlesRouter = Router()

articlesRouter
  .route('/')
  .get(checkArticlesEmpty, getArticlesHandler)
  .post(validateArticleData, postArticlesHandler)

articlesRouter
  .route('/:articleId')
  .get(getArticleByIdHandler)
  .delete(deleteArticleByIdHandler)
  .put(validateArticleData, putArticleByIdHandler)

export default articlesRouter
