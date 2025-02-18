import express from 'express'
import { restrictTo } from '../utils/restrictTo'
import { verifyUser } from '../utils/verifyUser'
import {
 fetchAllLoans,
 fetchAllPendingLoans,
 fetchExpiredLoans,
 deleteLoan,
} from '../controllers/loan.controller'

const router = express.Router()
router.get('/loans', verifyUser, fetchAllLoans)
router.get('/loans', verifyUser, fetchAllLoans)
router.get('/loans/:userEmail/get', verifyUser, fetchAllPendingLoans)
router.get('/loans/expired', verifyUser, fetchExpiredLoans)
router.post(
 '/loans/:loanId/delete',
 verifyUser,
 restrictTo('superAdmin'),
 deleteLoan
)
