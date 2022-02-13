const db = require('../database/models');
const { Op } = require('sequelize');
const { sequelize } = require('../database/models');
const bcrypt = require('bcrypt');

const usersModel = {
    getAll: async (filter) => {
        if (filter) {
            try {
                return await db.User.findAll({
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
                return await db.User.findAll();
            } catch (error) {
                console.log(error);
            }
        }
    },
    getByEmail: async (email) => {
        try {
          const result = await db.User.findAll({
            where: {
              email: sequelize.where(sequelize.fn('LOWER', sequelize.col("email")), email),
            },
          });
          return result;
        } catch (error) {
          return console.log(error);
        }
    },
    create: async function(first_name, last_name, email, password, image, user_category_id){
        try {
            await db.User.create({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: bcrypt.hashSync(password, 10),
                image: image,
                user_category_id: user_category_id
            })
        } catch (error) {
            return console.log(error);
        }
    },
    update: async function(first_name, last_name, email, image, id){
        try {
            await db.User.update({
                first_name: first_name,
                last_name: last_name,
                email: email,
                image: image,
            }, {
                where: { id: id }
            })
        } catch (error) {
            console.log(error);
        }
    },
    detail: async (email) => {
        try {
            let user = await db.User.findOne({
                where: {
                    email: email
                }
            });
            return user;
        } catch (error) {
            console.log(error);
        }
    },
    confirmed: async function(email){
        try {
            let user= await db.User.findOne({
                where:{
                    email: email
                }
            })
            return user;
        } catch (error) {
            console.log(error);
        }
    },
    delete: async function (id){
        try {
            await db.User.delete({
                where:{
                    id: id
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = usersModel;