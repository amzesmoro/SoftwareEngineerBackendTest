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

    const sortBy = req.query.sortBy ? req.query.sortBy : '';
    let sortType = req.query.sortType ? req.query.sortType : '';
    const type = req.query.type ? req.query.type : '';
    const amount = req.query.amount ? req.query.amount : '';

    // Sorting
    let sort = [['created_at', 'DESC']]; // set default if query == '';

    if (sortBy) {
        sort = [];
        sortType = (sortType == '') ? 'DESC' : sortType;
        sort.push([sortBy, sortType]);
    }

    let rangeAmount;
    if (amount) {
        let startAmount = amount.split(','[0]);
        let endAmount = amount.split(',')[1];
        rangeAmount = {
            [Op.between]: [parseFloat(startAmount), parseFloat(endAmount)]
        }
    } else {
        rangeAmount = ''
    }

    let whereObj = {
        created_by: id,
        deleted_at: null,
        type: type,
        amount: rangeAmount
    }

    const cleanObj = (obj) => {
        for (var objWhere in obj) {
            if (obj[objWhere] === '' || obj[objWhere] === undefined) {
                delete obj[objWhere];
            }
        }
    }

    cleanObj(whereObj);

    return Transaction.findAndCountAll({
        where: whereObj,
        limit,
        offset,
        order: sort
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