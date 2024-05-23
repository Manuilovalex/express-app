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
import { basicUsersAuth } from '../middlewares/basicUsersAuth.mjs'

const usersRouter = Router()

usersRouter
  .route('/')
  .get(basicUsersAuth, checkUsersEmpty, getUsersHandler)
  .post(basicUsersAuth, validateUserData, postUsersHandler)

usersRouter
  .route('/:userId')
  .get(basicUsersAuth, getUserByIdHandler)
  .delete(basicUsersAuth, deleteUserByIdHandler)
  .put(basicUsersAuth, validateUserData, putUserByIdHandler)

export default usersRouter
