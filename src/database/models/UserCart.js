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
        UserCart.hasOne(models.User, {
            as: 'Users',
            foreignKey: 'id'
        })

        UserCart.belongsToMany(models.Product, {
            as: 'Products',
            through: 'ProductsInCarts',
            foreignKey: 'product_id',
            otherKey: 'user_cart_id',
            timestamps: false
        })
    }
    
    
    return UserCart
}