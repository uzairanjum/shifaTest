const  departmentModel = (sequelize, DataTypes) => {
    const  Department = sequelize.define(' departments', {
        departmentName: DataTypes.INTEGER,
    })
    return Department
}
export default  departmentModel