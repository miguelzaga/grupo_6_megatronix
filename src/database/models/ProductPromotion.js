module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductPromotion'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        promotion: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        timestamps: false
    }
    
    const ProductPromotion = sequelize.define(alias, cols, config)

    ProductPromotion.associate = function(models){
        ProductPromotion.hasMany(models.Product, {
            as: 'Products',
            foreignKey: 'product_promotion_id',
            onDelete: 'cascade',
            hooks: 'true'})
    }

    return ProductPromotion
}