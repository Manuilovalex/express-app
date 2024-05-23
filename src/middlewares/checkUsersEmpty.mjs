import { users } from "../controllers/users.mjs"

export const checkUsersEmpty = (req, res, next) => {
  if (users.length === 0) {
    return res.status(200).send('No users found.')
  }
  next()
}
