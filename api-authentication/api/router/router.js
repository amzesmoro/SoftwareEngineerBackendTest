const express = require('express');
const router = express.Router();

const { getAllRole } = require('../controllers/roles');

router.get('/get-roles', getAllRole);

module.exports = router;