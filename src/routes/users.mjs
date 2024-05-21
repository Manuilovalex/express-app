import { Router } from 'express'
import {
  deleteUserByIdHandler,
  getUserByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserByIdHandler
} from '../controllers/users.mjs'
import { authenticate } from '../middlewares/auth.mjs'
import { validateUserData } from '../middlewares/validation.mjs'

const usersRouter = Router()

usersRouter.route('/').get(authenticate, getUsersHandler).post(authenticate, validateUserData, postUsersHandler)

usersRouter
  .route('/:userId')
  .get(authenticate, getUserByIdHandler)
  .delete(authenticate, deleteUserByIdHandler)
  .put(authenticate, validateUserData, putUserByIdHandler)

export default usersRouter
