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
        product_category_id: {
            type: dataTypes.INTEGER
        },
        product_promotion_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models) {
        Product.belongsToMany(models.User, {
            as: 'Users',
            through: 'ProductsInCart',
            foreignKey: 'id',
            otherKey: 'user_id',
            timestamps: false
        })
        Product.belongsTo(models.ProductCategory, {
            as: 'ProductCategories',
            foreignKey: 'product_category_id'

        })
        Product.belongsTo(models.ProductPromotion, {
            as: 'ProductPromotions',
            foreignKey: 'product_promotion_id'
        })
    }

    return Product
}