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

    return ProductCategory
}