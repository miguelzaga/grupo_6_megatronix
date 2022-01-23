module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCategory'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
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
            foreignKey: "user_category_id"
        })
    }


    return UserCategory
} 