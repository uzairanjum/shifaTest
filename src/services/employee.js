import db from '../models/index.js'


const addTaste = async (req) => {
    try {
        const {firstName, lastName, DOB, gender, department,hireDate,salary} = req.body
        if (taste) {
            return {
                status: true,
                message: 'Taste added successfully',
                data: {taste: taste}
            }
        }
        return {
            status: false,
            message: 'Taste already exists'
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            message: error.message
        }
    }
}