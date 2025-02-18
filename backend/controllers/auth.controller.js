import jwt from 'jsonwebtoken'

let Staffs = [
 {
  id: 1,
  name: 'Edwin John',
  email: 'edwinjohn@example.com',
  role: 'superAdmin',
  password: '12345Pass',
 },
 {
  id: 2,
  name: 'Jackson Page',
  email: 'jp@example.com',
  role: 'admin',
  password: '1234567Pass',
 },
 {
  id: 3,
  name: 'Larry Adam',
  email: 'ladam@example.com',
  role: 'staff',
  password: '123456789Pass',
 },
]

export const login = (req, res, next) => {
 const { email, password } = req.body
 if (!email || !password || email === '' || password === '') {
  next(errorHandler(400, 'All fields are required'))
 }
 const validStaff = Staffs.find(
  (staff) => staff.email === email && staff.password === password
 )

 const token = jwt.sign(
  {
   id: validStaff.id,
   email: validStaff.email,
   role: validStaff.role,
  },
  'process.env.JWT_SECRET'
 )

 const { password: pass, ...rest } = validStaff

 res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest)
}

export const logout = (req, res, next) => {
 res.clearCookie('access_token')
 res.status(200).json('Logout successful')
}
