const User = require('../models/User');
const { Op } = require('sequelize')

module.exports = {
    async show(req, res) {
        // Encontrar todos os usuarios que tem email que termina com @alguma
        // Desses usuarios quero buscar todos que moram em city
        // Desses usuarios quero buscasr as tech que comecam com react

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@'
                },
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Principal' } },
                {
                    association: 'tech',
                    required: false,
                    where:{
                        [Op.iLike]: 'react%'
                    }
                }
            ]
        });

        return res.json(users);

    }
}