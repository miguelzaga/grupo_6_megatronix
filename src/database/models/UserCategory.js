module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCategory'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        timestamps: false
    }

    const UserCategory = sequelize.define(alias, cols, config)

    UserCategory.associate = function(models){
        UserCategory.hasMany(models.User, {
            as: "Users",
            foreignKey: "UserCategories_id"
        })
    }


    return UserCategory
} 