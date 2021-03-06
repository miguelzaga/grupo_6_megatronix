const db = require('../database/models');
const { Op } = require('sequelize');
const { sequelize } = require('../database/models')

const categoriesModel = {
    getAll: async (filter) => {
        if (filter) {
            try {
                return await db.ProductCategory.findAll({
                    where: {
                        category:
                            sequelize.where(sequelize.fn('LOWER', sequelize.col("id")), 'LIKE', '%' + filter + '%')
                    }
                })
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                return await db.ProductCategory.findAll();
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = categoriesModel;