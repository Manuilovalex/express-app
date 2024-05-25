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

const usersRouter = Router()

usersRouter
  .route('/')
  .get(checkUsersEmpty, getUsersHandler)
  .post(validateUserData, postUsersHandler)

usersRouter
  .route('/:userId')
  .get(getUserByIdHandler)
  .delete(deleteUserByIdHandler)
  .put(validateUserData, putUserByIdHandler)

export default usersRouter
