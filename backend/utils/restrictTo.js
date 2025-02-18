import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'
export const restrictTo = (req, res, userRole, next) => {
 if (req.user.role !== userRole) {
  return next(
   errorHandler(401, 'You are not authourized to perform this activity')
  )
 }
 next()
}
