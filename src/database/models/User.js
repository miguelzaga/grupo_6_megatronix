module.exports = (sequelize, dataTypes) => {
    let alias = 'User'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING
        },
        user_category_id: {
            type: dataTypes.INTEGER
        },
        user_cart_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = function(models){
        User.belongsTo(models.UserCategory, {
            as: "UserCategories",
            foreignKey: "user_category_id"
        })

        User.hasOne(models.UserCart, {
            as: 'UserCarts',
            foreignKey: 'id'
        })
    }

    return User
} 