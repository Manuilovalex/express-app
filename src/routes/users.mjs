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

usersRouter.route('/')
usersRouter
  .route('/')
  .get(
    (req, res, next) => {
      console.log('In /users route, isAuthenticated:', req.isAuthenticated(), req.user, req.session)
      next()
    },
    checkUsersEmpty,
    ensureAuthenticated,
    getUsersHandler
  )
  .post(
    (req, res, next) => {
      console.log('In /users route POST, isAuthenticated:', req.isAuthenticated(), req.user, req.session)
      next()
    },
    validateUserData,
    ensureAuthenticated,
    postUsersHandler
  )

usersRouter
  .route('/:userId')
  .get(ensureAuthenticated, getUserByIdHandler)
  .delete(ensureAuthenticated, deleteUserByIdHandler)
  .put(ensureAuthenticated, validateUserData, putUserByIdHandler)

export default usersRouter
