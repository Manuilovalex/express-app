import { Router } from 'express'
import {
  deleteArticleByIdHandler,
  getArticleByIdHandler,
  getArticlesHandler,
  postArticlesHandler,
  putArticleByIdHandler
} from '../controllers/articles.mjs'
import { checkArticleAccess } from '../middlewares/accessControl.mjs'

const articlesRouter = Router()

articlesRouter.route('/').get(getArticlesHandler).post(postArticlesHandler)

articlesRouter
  .route('/:articleId')
  .get(checkArticleAccess, getArticleByIdHandler)
  .delete(checkArticleAccess, deleteArticleByIdHandler)
  .put(checkArticleAccess, putArticleByIdHandler)

export default articlesRouter
