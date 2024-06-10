import { Router } from 'express'
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.mjs'
import { validateUserData } from '../middlewares/validationUser.mjs'
import { ensureAuthenticated } from '../middlewares/authMiddleware.mjs'
import { checkUsersEmpty } from '../middlewares/checkUsersEmpty.mjs'

const usersRouter = Router()

usersRouter
  .route('/')
  .get(ensureAuthenticated, checkUsersEmpty, getUsers)
  .post(ensureAuthenticated, validateUserData, createUser)

usersRouter
  .route('/:id')
  .get(ensureAuthenticated, getUser)
  .delete(ensureAuthenticated, deleteUser)
  .put(ensureAuthenticated, validateUserData, updateUser)

export default usersRouter
