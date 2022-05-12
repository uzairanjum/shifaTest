const  departmentManagerModel = (sequelize, DataTypes) => {
    const  DepartmentManager = sequelize.define(' departmentmangers', {
        employeeId: DataTypes.INTEGER,
        departmentId: DataTypes.INTEGER,
        active: DataTypes.BOOLEAN
    })
    return DepartmentManager
}
export default  departmentManagerModel