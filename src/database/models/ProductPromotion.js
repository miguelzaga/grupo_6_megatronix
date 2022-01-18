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
    return ProductPromotion
}