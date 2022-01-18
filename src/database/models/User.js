module.exports = (sequelize, dataTypes) => {
    let alias = 'User'
    let cols = {
        idusers: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastName: {
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
        categoryUsers_idcategoryUsers: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    // User.associate = function(){

    // }

    return User
} 