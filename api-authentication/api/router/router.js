const express = require('express');
const router = express.Router();

const { getAllRole } = require('../controllers/roles');
const UserControllers = require('../controllers/users');

router.get('/get-roles', getAllRole);

router.post('/create-user', UserControllers.createUser);
router.get('/get-all-users', UserControllers.getAllUser);
router.get('/detail-user', UserControllers.getDetailUser);
router.patch('/delete-user', UserControllers.deleteUser);

module.exports = router;