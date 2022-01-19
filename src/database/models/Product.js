module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description_short: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        description_long: {
            type: dataTypes.STRING(1000)
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING
        },
        product_categories_id: {
            type: dataTypes.INTEGER
        },
        product_promotions_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models) {
        Product.belongsToMany(models.UserCart, {
            as: 'UserCarts',
            through: 'ProductsInCart',
            foreignKey: 'user_carts_id',
            otherKey: 'products_id',
            timestamps: false
        })
        Product.belongsTo(models.ProductCategory, {
            as: 'ProductCategories',
            foreignKey: 'product_categories_id'
        })
        Product.belongsTo(models.ProductPromotion, {
            as: 'ProductPromotions',
            foreignKey: 'product_promotions_id'
        })
    }

    return Product
}