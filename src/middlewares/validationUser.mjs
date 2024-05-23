import Joi from 'joi'

const userSchema = Joi.object({
  username: Joi.string().required().min(3).max(20),
  email: Joi.string().email().required()
})

export const validateUserData = (req, res, next) => {
  const { error } = userSchema.validate(req.body)

  if (error) {
    return res.status(400).send(`error: ${error.message}`)
  }

  next()
}
