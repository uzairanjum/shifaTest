const employeeModel = (sequelize, DataTypes) => {
    const Employee = sequelize.define('employees', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.BOOLEAN,
        DOB: DataTypes.DATE,
        gender: DataTypes.STRING,
        hireDate: DataTypes.STRING,
        departmentId: DataTypes.INTEGER,
    })
    return Employee
}

export default employeeModel