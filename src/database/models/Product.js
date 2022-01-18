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
        product_prmotions_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    // Product.associate = function(models) {
    //     Product.belongsToMany(models.User, {
    //         as: 'Users',
    //         through: 'UsersProducts',
    //         foreignKey: 'Users_id',
    //         otherKey: 'Products_id',
    //         timestamps: false
    //     })
    // }

    return Product
}