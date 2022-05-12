import express from 'express'
import * as employeeController from  '../controllers/employee.controller.js'


const router = express.Router()


router.post('/add', employeeController.addEmployee)

router.put('/update/:employeeId', employeeController.addEmployee)




export {router}


