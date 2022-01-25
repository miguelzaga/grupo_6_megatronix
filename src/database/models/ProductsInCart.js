module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductsInCart'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        products_id: {
            type: dataTypes.INTEGER,
        },
        user_id: {
            type: dataTypes.INTEGER,
        }
    }
    let config = {
        timestamps: false
    }

    const ProductsInCart = sequelize.define(alias, cols, config)
    return ProductsInCart
}