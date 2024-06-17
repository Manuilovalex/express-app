import Joi from 'joi'

const userSchema = Joi.object({
  username: Joi.string().required().min(3).max(20),
  email: Joi.string().email().required()
})

export const validateUserData = (req, res, next) => {
  const validate = (user) => {
    return user.name && user.email
  }

  if (Array.isArray(req.body)) {
    const invalidUsers = req.body.filter((user) => !validate(user))
    if (invalidUsers.length > 0) {
      return res.status(400).send('Invalid data. Name and email are required for each user.')
    }
  } else {
    if (!validate(req.body)) {
      return res.status(400).send('Invalid data. Name and email are required.')
    }
  }

  next()
}
