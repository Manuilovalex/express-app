import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcryptjs'
import { findUserByEmailAndPassword, findUserById } from '../services/userService.mjs'

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await findUserByEmailAndPassword(email, password)
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' })
      }
      return done(null, user)
    } catch (error) {
      return done(error)
    }
  })
)

passport.serializeUser((user, done) => {
  done(null, user._id) // Сохраняем только _id пользователя
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserById(id)
    done(null, user)
  } catch (error) {
    done(error)
  }
})

export { passport }
