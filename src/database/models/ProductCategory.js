module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCategory'
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
    
    const ProductCategory = sequelize.define(alias, cols, config)

    ProductCategory.associate = function(models){
        ProductCategory.hasMany(models.Product, {
            as: 'Products',
            foreignKey: 'product_category_id',
            onDelete: 'cascade',
            hooks: 'true'
        })
    }

    return ProductCategory
}