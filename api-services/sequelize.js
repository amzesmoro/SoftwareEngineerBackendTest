const config = require('./config/config');
const Sequelize = require('sequelize');
const TransactionModel = require('./api/model/transaction');

const sequelize = new Sequelize(config.dbConnectionString, {
    logging: false,
});

const Transaction = TransactionModel(sequelize, Sequelize);

module.exports = {
    Transaction
}