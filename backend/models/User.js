const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        units: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return User;
};
