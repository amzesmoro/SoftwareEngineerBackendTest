const UserServices = require('../services/users');
const getCurrentDate = require('../helper/current-date');
const bcrypt = require('bcrypt');

// Create User
const createUser = async (req, res, next) => {
    try {
        const currentDate = getCurrentDate();
        const dataInsert = {
            id_role: req.body.id_role,
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobile_number: req.body.mobile_number,
            status: req.body.status,
            created_at: currentDate.dateAsiaJakarta,            
        }

        let userHasRegistered = await UserServices.checkUserRegistered(req);

        if (userHasRegistered.length > 0) {
            if(
                userHasRegistered[0].username == dataInsert.username &&
                userHasRegistered[0].email == dataInsert.email
            ) {
                return res.status(400).json({
                    status: 'Bad Request',
                    message: `Email : ${userHasRegistered[0].email} and Username : ${userHasRegistered[0].username} has been registered`
                });
            } else if (userHasRegistered[0].email == dataInsert.email) {
                return res.status(400).json({
                    status: 'Bad Request',
                    message: `Email : ${userHasRegistered[0].email} has been registered`
                });
            } else if (userHasRegistered[0].username == dataInsert.username) {
                return res.status(400).json({
                    status: 'Bad Request',
                    message: `Username : ${userHasRegistered[0].username} has been registered`
                });
            }
        } else {
            if (dataInsert.password !== req.body.password_confirmation) {
                return res.status(400).json({
                    status: 'Bad Request',
                    message: `Password confirmation doesn't match with Password`,
                  });
            } else {
                bcrypt.hash(dataInsert.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            status: 'Internal Server Error',
                            message: err
                        });
                    } else {
                        dataInsert.password = hash;
                        UserServices.createUser(dataInsert)
                        .then(data => {
                            res.status(201).json({
                                message: 'User Created',
                                data,
                                request: {
                                    type: 'POST',
                                    url: '/create-user'
                                }
                            });
                        }).catch(err => {
                            next(err);
                        });
                    }
                });
            }
        }        
    } catch (err) {
        next(err);
    }
}

// Get All Users
const getAllUser = (req, res, next) => {
    UserServices.getAllUser(req)
    .then(docs => {
        if (docs.data.rows.length > 0) {
            const response = {
                total: docs.data.count,
                nextPage: docs.pagination.nextPage,
                prevPage: docs.pagination.prevPage,
                results: docs.data.rows.map((doc) => {
                    return {
                        id: doc.id,
                        email: doc.email,
                        username: doc.username,
                        firstname: doc.firstname,
                        lastname: doc.lastname,
                        mobile_number: doc.mobile_number,
                        status: doc.status,
                        created_at: doc.created_at,
                        created_by: doc.created_by,
                        role: doc.role,
                    };
                }),
                request: {
                type: 'GET',
                url: '/get-all-users',
                },
            };
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: 'No records found'
            });
        }
    }).catch(err => {
        next(err);
    });
}

// Get Detail Users
const getDetailUser = (req, res, next) => {
    const id = req.query.id;
    UserServices.getDetailUser(id)
    .then(docs => {
        if (docs.length > 0) {
            const response = {
                data: docs.map(doc => {
                    return {
                        id: doc.id,
                        email: doc.email,
                        username: doc.username,
                        firstname: doc.firstname,
                        lastname: doc.lastname,
                        mobile_number: doc.mobile_number,
                        status: doc.status,
                        created_at: doc.created_at,
                        created_by: doc.created_by,
                        role: doc.role,
                    }
                }),
                request: {
                    type: 'GET',
                    url: `/detail-user?id=${id}`
                }
            }
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: `Can't find User with id: ${id}`
            });
        }
    })
    .catch(err => {
        next(err);
    });

}

// Delete User
const deleteUser = async (req, res, next) => {
    try {
        const id = req.query.id;
        const currentDate = getCurrentDate();
        let detailUser = await UserServices.getDetailUser(id);
        if (detailUser.length > 0) {
            const deleteData = {
                deleted_at: currentDate.dateAsiaJakarta,
            };
            const deleteUser = await UserServices.deleteUser(id, deleteData);
            const response = {
                message: `Successfully Deleted User with id: ${id}`,
                totalDeleted: deleteUser[0],
                request: {
                    type: 'PATCH',
                    url: `/delete-user?id=${id}`
                }
            };
            res.status(200).json(response);
        } else {
            res.status(404).json({
                message: `Can't find User with id: ${id}`
            });
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createUser,
    getAllUser,
    getDetailUser,
    deleteUser,
}