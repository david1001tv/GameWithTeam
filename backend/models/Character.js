//подключаю либу для бд-шки
const {DataTypes} = require('sequelize');
// пошло описание таблицы
module.exports = (sequelize) => {
    const Characters = sequelize.define('characters', { // начинаем описывать модель пользователя
        id: {
            type: DataTypes.INTEGER, // тип инт 
            allowNull: false,        // не нулл
            autoIncrement: true,     // автоинкрементное поле
            primaryKey: true,        // главное поле
        },
        health: {
            type: DataTypes.INTEGER, // тип инт
            allowNull: false,        // не нулл
        },
        damage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        armor: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
        
    }, {
        timestamps: false,     // время записи и изменения данных
        freezeTableName: true, // позволить изменять имя таблицы
    });

   return Characters; // вернуть объект
};