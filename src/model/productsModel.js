const db = require('../database/models');
const { Op } = require('sequelize');
const { sequelize } = require('../database/models')

const productsModel = {
    getAll: async function (filter) {
        if (filter) {
            try {
                return await db.Product.findAll({
                    where: {
                        name:
                            sequelize.where(sequelize.fn('LOWER', sequelize.col("name")), 'LIKE', '%' + filter + '%')
                    }
                })
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                return await db.Product.findAll();
            } catch (error) {
                console.log(error);
            }
        }
    },
    getByPk: async function (id) {
        try {
            let pk = await db.Product.findByPk(id);
            return pk;
        } catch (error) {
            console.log(error);
        }
    },
    create: async function (name, description_short, description_long, product_category_id, product_promotion_id, price, image) {
        try {
            await db.Product.create({
                name: name,
                description_short: description_short,
                description_long: description_long,
                price: price,
                product_category_id: product_category_id,
                product_promotion_id: product_promotion_id,
                image: image
            })
        } catch (error) {
            return console.log(error);
        }
    },
    update: async function (name, description_short, description_long, product_category_id, product_promotion_id, price, image, id) {
        try {
            db.Product.update({
                name: name,
                description_short: description_short,
                description_long: description_long,
                price: price,
                product_category_id: product_category_id,
                product_promotion_id: product_promotion_id,
                image: image
            }, {
                where: { id: id }
            })
        } catch (error) {
            console.log(error);
        }
    },
    delete: async function (id) {
        try {
            await db.Product.destroy({
                where: { id: id },
                truncate: { cascade: true }
            })
        } catch (error) {
            console.log(error);
        }
    },
    getAllCount: async function (idCategory) {
        try {
            let { count, rows } = await db.Product.findAndCountAll({
                where: {
                    product_category_id: idCategory
                }
            })
            return { count: count, data: rows }
        } catch (error) {
            console.log(error);
        }
    },
    countByCategory: async function () {
        try {
            return await db.Product.findAll({
                attributes: [
                    'product_category_id',
                    [sequelize.fn('COUNT', sequelize.col('product_category_id')), 'Count']
                ],
                group: ['product_category_id']
            })
        } catch (error) {
            console.log(error);
        }
    },
    search: async function (filter) {
        try {
            return await db.Product.findAll({
                where: {
                    name:
                        sequelize.where(sequelize.fn('LOWER', sequelize.col("name")), 'LIKE', '%' + filter + '%')
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = productsModel;