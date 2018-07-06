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

    /**
     * Функция создания связи по внешнему ключу
     * @param {*} models объект содержащий модели
     */
    Characters.associate = function (models) {
        // моедль, с которой образуется связь
        const { Unit } = models;
        // описание связи
        Characters.Units = Characters.hasMany(Unit, {
            // каскадное удаление для сохранения целостности
            onDelete: 'CASCADE',
            // описание внешнего ключа
            foreignKey: {
                name: 'units_id',// имя
                allowNull: false,// не NULL
            },
        });
    }

   return Characters; // вернуть объект
};