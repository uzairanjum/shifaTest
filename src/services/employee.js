import db from '../models/index.js'

// api app for add new employee
const addEmployee= async (req) => {
    try {
        const {firstName, lastName, DOB, gender, department,hireDate} = req.body
        const addEmployee = await db.Employee.create({firstName:firstName, lastName:lastName, DOB:DOB, gender:gender,hireDate:hireDate})
        if(addEmployee){
            const addDepartment = await db.Salary.create({departmentName:department})
            if(addDepartment){
                const updateEmployee = await db.Employee.updateOne({department:addDepartment.id},{where:{id:addEmployee}})
                return {
                    status: true,
                    message: 'employee added',
                    data:updateEmployee
                }
            }
        }
        return {
            status: false,
            message: 'something went wrong'
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: error.message
        }
    }
}

// api app for edit employee using id
const updateEmployee= async (req) => {
    try {
        const {id} = req.params
        const {salary} = req.body
        const findSalary = await db.Salary.findOne({where:{employeeId:id}})
        if(findSalary){
            const updateSalary = await db.Salary.updateOne({salary:salary},{where:{employeeId:id}})
            if(updateSalary){
                return {
                    status: true,
                    message: 'employee updated',
                }
            }
        }
        return {
            status: false,
            message: 'something went wrong'
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: error.message
        }
    }
}

// api app for getting employee using id
const getEmployeeById= async (req) => {
    try {
        const {id} = req.params
        const findEmployee = await db.Employee.findOne({where:{id:id}})
        if(findEmployee){
            const salary = await db.Salary.findone({where:{employeeId:id}})
            const department = await db.Department.findone({where:{id:findEmployee.departmentId}})
            if(updateSalary){
             const employe = {...findEmployee, departmentId: department, salary: salary}
                return {
                    status: true,
                    message: 'employee',
                    data:employe
                }
            }
        }
        return {
            status: false,
            message: 'something went wrong'
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: error.message
        }
    }
}








export{addEmployee, updateEmployee, getEmployeeById}