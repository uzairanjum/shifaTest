const salaryModel = (sequelize, DataTypes) => {
    const Salary = sequelize.define('salaries', {
        salary: DataTypes.INTEGER,
        employeeId: DataTypes.INTEGER,
        fromDate: DataTypes.DATE,
        toDate: DataTypes.DATE,
        active: DataTypes.BOOLEAN,
    })
    return Salary
}

export default salaryModel