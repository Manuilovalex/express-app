import { Router } from 'express'
import {
  deleteUserByIdHandler,
  getUserByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserByIdHandler
} from '../controllers/users.mjs'
import { validateUserData } from '../middlewares/validationUser.mjs'
import { checkUsersEmpty } from '../middlewares/checkUsersEmpty.mjs'
import { ensureAuthenticated } from '../middlewares/authMiddleware.mjs'

const usersRouter = Router()

usersRouter
  .route('/')
  .get(ensureAuthenticated, checkUsersEmpty, getUsersHandler)
  .post(ensureAuthenticated, validateUserData, postUsersHandler)

usersRouter
  .route('/:userId')
  .get(ensureAuthenticated, getUserByIdHandler)
  .delete(ensureAuthenticated, deleteUserByIdHandler)
  .put(ensureAuthenticated, validateUserData, putUserByIdHandler)

export default usersRouter
