const { Op } = require('sequelize');
const { Transaction } = require('../../sequelize');
const paginator = require('../helper/pagination');

// Create Transaction
const createTransaction =  (dataInsert) => {
    return Transaction.create(dataInsert);
}

// Get All Transaction
const getAllTransaction = (req) => {
    const id = req.userData.id;
    const pagination = paginator(req.query.page, 10); // set 1 page = 10 length data
    const limit = pagination.limit;
    const offset = pagination.offset;
    return Transaction.findAndCountAll({
        where: {
            [Op.and]: {
                created_by: id,
                deleted_at: null,
            }
        },
        limit,
        offset,
        order: [['created_at', 'DESC']]
    }).then(docs => {
        return {
            data: docs,
            pagination: pagination
        }
    });
}

// Get Detail Transaction
const getDetailTransaction = (id) => {
    return Transaction.findAll({
        where: {
            id: id, 
            deleted_at: null,
        },
        limit: 1
    }).then(docs => {
        return docs;
    })
}

// Update Transaction
const updateTransaction = (id, dataUpdate) => {
    return Transaction.update(dataUpdate, {
        where: {
            id: id
        }
    });
}

// Delete Transaction
const deleteTransaction = (id, dataUpdate) => {
    return Transaction.update(dataUpdate, {
        where: {
            id: id
        }
    });
}

module.exports = {
    createTransaction,
    getAllTransaction,
    getDetailTransaction,
    updateTransaction,
    deleteTransaction
}