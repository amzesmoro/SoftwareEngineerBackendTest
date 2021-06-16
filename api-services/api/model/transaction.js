module.exports = (sequelize, type) => {
    return sequelize.define('transactions', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: type.NUMERIC,
        notes: type.STRING,
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: type.NOW,
            allowNull: true,
        }, 
        updated_at: {
            type: 'TIMESTAMP',
            allowNull: true,
        },
        deleted_at: {
            type: 'TIMESTAMP',
            allowNull: true,
        },
        created_by: type.INTEGER,
        updated_by: type.INTEGER,
        deleted_by: type.INTEGER,
        type: type.STRING
    }, {
        freezeTableName: true,
        timestamps: false
    });
}