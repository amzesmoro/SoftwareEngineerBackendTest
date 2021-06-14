const { Op } = require('sequelize');
const { User, Role } = require('../../sequelize');
const paginator = require('../helper/pagination');
const currentDate = require('../helper/current-date');

const checkUser = (req) => {
    return User.findAll({
        where: {
            [Op.or]: [
                { email: req.body.email_username },
                { username: req.body.email_username }
            ],
            deleted_at: null
        },
        order: [['created_at', 'DESC']],
        limit: 1,
        include: [
            {
                model: Role,
                as: 'role'
            }
        ]
    }).then(user => {
        return user;
    });
}

const getAllUser = (req) => {
    const pagination = paginator(req.query.page, 10); // set 1 page = 10 length data
    const limit = pagination.limit;
    const offset = pagination.offset;
    return User.findAndCountAll({
        where: { deleted_at: null },
        attributes: { exclude: ['password'] },
        limit, 
        offset,
        order: [['created_at', 'DESC']],
        include: {
            model: Role,
            as: 'role'
        }
    }).then(docs => {
        return {
            data: docs,
            pagination: pagination
        }
    });
}

const getDetailUser = (id) => {
    return User.findAll({
        where: {
            id: id,
            deleted_at: null
        },
        attributes: { exclude: ['password'] },
        limit: 1,
        include: [
            {
                model: Role,
                as: 'role',
                where: {
                    deleted_at: null
                }
            }
        ]
    }).then(docs => {
        return docs;
    });
}

module.exports = {
    checkUser,
    getAllUser,
    getDetailUser
}