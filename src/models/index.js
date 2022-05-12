import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()


import departmentModel from './department.model.js'
import departmentManagerModel from './departmentManager.model.js'
import employeeModel from './employee.model.js'
import salaryModel from './salary.model.js'


const config = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.PORT
}

const db = {}
const {Op, QueryTypes} = Sequelize
let sequelize = new Sequelize(config.database, config.username, config.password, config)

db.Op = Op
db.QueryTypes = QueryTypes
db.sequelize = sequelize

db.Department = departmentModel(sequelize, Sequelize.DataTypes)
db.DepartmentManager = departmentManagerModel(sequelize, Sequelize.DataTypes)
db.Employee = employeeModel(sequelize, Sequelize.DataTypes)
db.Salary = salaryModel(sequelize, Sequelize.DataTypes)


Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})


export default db
