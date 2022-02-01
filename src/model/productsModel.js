const db = require('../database/models');
const { Op } = require('sequelize');
const { sequelize } = require('../database/models')

const productsModel = {
    findAll: async (filter) => {
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
    findByPk: async (id) => {
        try {
            let pk = await db.Product.findByPk(id);
            return pk;
        } catch (error) {
            console.log(error);
        }
    },
    create: async (name, description_short, description_long, price, image) => {
        try {
            db.Product.create({
                name: name,
                description_short: description_short,
                description_long: description_long,
                price: price,
                image: image.filename
            })
        } catch (error) {
            console.log(error);
        }
    },
    update: (name, description_short, description_long, price, image,id) => {
        try {
            db.Product.update({
                name: name,
                description_short: description_short,
                description_long: description_long,
                price: price,
                image: image ? image.filename : ''
            }, {
                where: { id: id }
            })
        } catch (error) {
            console.log(error);
        }
    },
    delete: (id) => {
        try {
            db.Product.destroy({
                where: { id: id }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = productsModel;

//productsModel.create('productoNuevo', 'otro', 'otro', 5000, 'image-1643720179409.png')