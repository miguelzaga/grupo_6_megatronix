module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCart'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }
    let config = {
        timestamps: false
    }

    const UserCart = sequelize.define(alias, cols, config)
    return UserCart
}