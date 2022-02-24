const { dbUser } = require('../model');

const usersApi = {
    list: async (req, res) => {
        try {
            let dbUsuarios = await dbUser.getAll();
            let users = [];
            const protocol = req.protocol;
            const host = req.headers.host;
            dbUsuarios.map((user) => {
                let usuario = {
                    id: user.id,
                    name: user.first_name.replace(/\s+/g, '') + " " + user.last_name.replace(/\s+/g, ''),
                    email: user.email,
                    detail: protocol + "://" + host + "/api/users/" + user.id
                }
                users.push(usuario);
            })
            return res.status(200).json({
                count: users.length,
                latest: users[users.length - 1],
                users: users,
                status: 200
            })
        } catch (error) {
            res.render('error');
        }
    },
    getById: async (req, res) => {
        try {
            let dbUsuarios = await dbUser.getByPk(req.params.id);
            const protocol = req.protocol;
            const host = req.headers.host;
            let usuario = {
                    id: dbUsuarios.id,
                    name: dbUsuarios.first_name.replace(/\s+/g, '') + " " + dbUsuarios.last_name.replace(/\s+/g, ''),
                    email: dbUsuarios.email,
                    image: protocol + "://" + host + "/images/users/" + dbUsuarios.image
                }
            return res.status(200).json({
                user: usuario,
                status: 200
            })
        } catch (error) {
            res.render('error');
        }
    },
    error: (req, res) => {
        res.render('error');
    }
}

module.exports = usersApi;