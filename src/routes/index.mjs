import { Router } from 'express'
import {
  getUsers,
  getUser,
  createUserOrUsers,
  deleteUserOrUsers,
  updateUserOrUsers,
  replaceUserOrUsers
} from '../controllers/users.mjs'
import { validateUserData } from '../middlewares/validationUser.mjs'
import { ensureAuthenticated } from '../middlewares/authMiddleware.mjs'
import { checkUsersEmpty } from '../middlewares/checkUsersEmpty.mjs'

const usersRouter = Router()

usersRouter
  .route('/')
  .get(ensureAuthenticated, checkUsersEmpty, getUsers)
  .post(ensureAuthenticated, validateUserData, createUserOrUsers)
  .delete(ensureAuthenticated, deleteUserOrUsers)
  .put(ensureAuthenticated, validateUserData, updateUserOrUsers)
  .patch(ensureAuthenticated, validateUserData, replaceUserOrUsers)

usersRouter
  .route('/:id')
  .get(ensureAuthenticated, getUser)
  .delete(ensureAuthenticated, deleteUserOrUsers)
  .put(ensureAuthenticated, validateUserData, updateUserOrUsers)
  .patch(ensureAuthenticated, validateUserData, replaceUserOrUsers)

export default usersRouter
