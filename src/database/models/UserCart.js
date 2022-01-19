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

    UserCart.associate = function(models) {
        UserCart.belongsTo(models.User, {
            as: 'Users',
            foreignKey: 'id'
        })

        UserCart.belongsToMany(models.Product, {
            as: 'Products',
            through: 'ProductsInCarts',
            foreignKey: 'products_id',
            otherKey: 'user_carts_id',
            timestamps: false
        })
    }
    
    
    return UserCart
}