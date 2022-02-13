const db = require('../database/models');
const { Op } = require('sequelize');
const { sequelize } = require('../database/models')

const destacadosModel = {
    getAll: async (filter) => {
        if (filter) {
            try {
                return await db.Product.findAll({
                    where: {
                        promotion:
                            sequelize.where(sequelize.fn('LOWER', sequelize.col("product_promotion_id")), 'LIKE', '%' + filter + '%')
                    }
                })
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                return await db.ProductPromotion.findAll();
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = destacadosModel;