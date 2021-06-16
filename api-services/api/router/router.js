const express = require('express');
const router = express.Router();

const { checkAuth } = require('../middleware/check-auth');
const TransactionControllers = require('../controllers/transaction');

router.post('/api/transactions/create', checkAuth, TransactionControllers.createTransaction);
router.get('/api/transactions/get-all', checkAuth, TransactionControllers.getAllTransaction);
router.get('/api/transactions/get-detail', checkAuth, TransactionControllers.getDetailTransaction);
router.patch('/api/transactions/update', checkAuth, TransactionControllers.updateTransaction);
router.patch('/api/transactions/delete', checkAuth, TransactionControllers.deleteTransaction);

module.exports = router;