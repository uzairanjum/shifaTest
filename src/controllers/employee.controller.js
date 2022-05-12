
import * as employeeSerice from '../services/employee.js'

const addEmployee = async (req, res) => {
    const response = await employeeSerice.addEmployee(req)
    return res.send(response)
}

export{addEmployee}