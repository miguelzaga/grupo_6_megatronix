const db = require('../database/models');

// ---- Test de modelos -----


db.User.findByPk(1,
    {
        include: ['UserCategories', 'UserCarts']
    })
    .then(result => console.log(result.dataValues))
    .catch(error => console.log(error))


db.UserCart.findByPk(1,
    {
        include: ['Users', 'Products']
    })
    .then(result => console.log(result.dataValues))
    .catch(error => console.log(error))

db.Product.findByPk(1,
    {
        include: ['ProductCategories', 'ProductPromotions']
    })
    .then(result => console.log(result.dataValues))
    .catch(error => console.log(error))