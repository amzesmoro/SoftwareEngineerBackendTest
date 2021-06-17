const TransactionServices = require('../services/transaction');
const currentDate = require('../helper/current-date');
const getCurrentDate = currentDate();
const empty = [null, undefined, ''];

const createTransaction = (req, res, next) => {
    const dataInsert = {
        amount: req.body.amount ? req.body.amount : null,
        notes: req.body.notes ? req.body.notes : null,
        created_at: getCurrentDate.dateAsiaJakarta,
        created_by: req.userData.id,
        type: req.body.type ? req.body.type: null
    }

    if (empty.includes(dataInsert.amount)) {
        return res.status(400).json({
            message: 'Please input amount transaction!'
        });
    }

    if (empty.includes(dataInsert.notes)) {
        return res.status(400).json({
            message: 'Please input notes transaction!'
        });
    }

    if (empty.includes(dataInsert.type)) {
        return res.status(400).json({
            message: 'Please input type transaction!'
        });
    }

    TransactionServices.createTransaction(dataInsert)
    .then(data => {
        res.status(201).json({
            message: 'Transaction Created',
            data,
            request: {
                type: 'POST',
                url: '/api/transactions/create'
            }
        })
    }).catch(error => {
        next(error);
    });
}

const getAllTransaction = (req, res, next) => {
    TransactionServices.getAllTransaction(req)
    .then(docs => {
        if (docs.data.rows.length > 0) {
            const response = {
                total: docs.data.count,
                nextPage: docs.pagination.nextPage,
                prevPage: docs.pagination.prevPage,
                results: docs.data.rows.map(doc => {
                    return {
                        id: doc.id,
                        amount: doc.amount,
                        notes: doc.notes,
                        created_at: doc.created_at,
                        deleted_at: doc.deleted_at,
                        updated_at: doc.updated_at,
                        created_by: doc.created_by,
                        updated_by: doc.udpated_by,
                        type: doc.type,
                    }
                }),
                request: {
                    type: 'GET',
                    url: '/api/transactions/get-all'
                }
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'No records found'
            });
        }
    }).catch(err => {
        next(err);
    })
}

const getDetailTransaction = (req, res, next) => {
    try {
        const id = req.query.id;

        TransactionServices.getDetailTransaction(id)
        .then(docs => {
            if (docs.length > 0) {
                let doc = docs[0];
                const response = {
                    result: {
                        id: doc.id,
                        amount: doc.amount,
                        notes: doc.notes,
                        created_at: doc.created_at,
                        updated_at: doc.updated_at,
                        created_by: doc.created_by,
                        updated_by: doc.udpated_by,
                        type: doc.type,
                    },
                    request: {
                        type: 'GET',
                        url: `/api/transactions/get-detail?id=${id}`
                    }
                }

                if (req.userData.id == response.result.created_by) {
                    res.status(200).json(response);
                } else {
                    res.status(403).json({
                        status: 'Forbidden',
                        message: 'You cannot see detail another user!' 
                    });
                }

            } else {
                res.status(404).json({
                    message: `Can't find Transactions with id: ${id}`
                });
            }
        }).catch(error => {
            next(error);
        });

    } catch(error) {
        next(error);
    }
}

const updateTransaction = async (req, res, next) => {
    try {
        const id = req.query.id;
        let detailTransaction = await TransactionServices.getDetailTransaction(id);
        let dataDetail = detailTransaction[0];
        if (detailTransaction.length > 0) {
            const dataUpdate = {
                amount: req.body.amount ? req.body.amount : null,
                notes: req.body.notes ? req.body.notes : null,
                type: req.body.type ? req.body.type: null,
                updated_at: getCurrentDate.dateAsiaJakarta,
                updated_by: req.userData.id,
            }
            
            if (req.userData.id == dataDetail.created_by) {                
                if (empty.includes(dataUpdate.amount)) {
                    return res.status(400).json({
                        message: 'Please input amount transaction!'
                    });
                }
            
                if (empty.includes(dataUpdate.notes)) {
                    return res.status(400).json({
                        message: 'Please input notes transaction!'
                    });
                }
            
                if (empty.includes(dataUpdate.type)) {
                    return res.status(400).json({
                        message: 'Please input type transaction!'
                    });
                }

                await TransactionServices.updateTransaction(id, dataUpdate);
                res.status(200).json({
                    message: `Successfully Updated Transaction with id: ${id}`,
                    dataUpdate: dataUpdate,
                    request: {
                        type: 'PATCH',
                        url: `/api/transactions/update?id=${id}`
                    }
                });
            } else {
                res.status(403).json({
                    status: 'Forbidden',
                    message: 'You cannot update transaction another user!' 
                });
            }

        } else {
            res.status(404).json({
                message: `Can't find Transactions with id: ${id}`
            });
        }
    } catch (error) {
        next(error);
    }
}


const deleteTransaction = async (req, res, next) => {
    try {
        const id = req.query.id;
        let detailTransaction = await TransactionServices.getDetailTransaction(id);
        let dataDetail = detailTransaction[0];
        if (detailTransaction.length > 0) {
            const dataUpdate = {
                deleted_at: getCurrentDate.dateAsiaJakarta,
                deleted_by: req.userData.id
            }
            
            if (req.userData.id == dataDetail.created_by) {
                let deleteData = await TransactionServices.deleteTransaction(id, dataUpdate);
                res.status(200).json({
                    message: `Successfully Deleted Transaction with id: ${id}`,
                    totalDeleted: deleteData[0],
                    request: {
                        type: 'PATCH',
                        url: `/api/transactions/delete?id=${id}`
                    }
                });
            } else {
                res.status(403).json({
                    status: 'Forbidden',
                    message: 'You cannot delete transaction another user!' 
                });
            }

        } else {
            res.status(404).json({
                message: `Can't find Transactions with id: ${id}`
            });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createTransaction,
    getAllTransaction,
    getDetailTransaction,
    updateTransaction,
    deleteTransaction,
}