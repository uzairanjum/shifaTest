import express from 'express'

//user
import * as employeeRoutes from '../routes/employee.route.js'


const router = express.Router()

router.use('/employee', employeeRoutes.router)



export {router}