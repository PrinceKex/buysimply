import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const authRoutes = require('./routes/auth.route.js')
const loanRoutes = require('./routes/loan.route.js')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(morgan('combined'))

app.use('/', authRoutes)
app.use('/api/loans', loanRoutes)

app.listen(3000, () => {
 console.log('Server is running on port 3000')
})
