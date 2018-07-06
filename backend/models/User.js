const {DataTypes} = require('sequelize');// подгружаем либу
// пошло описание пользователя
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
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    /**
     * Функция создания связи по внешнему ключу
     * @param {*} models объект содержащий модели
     */
    User.associate = function (models) {
        // модель, с котрой образуется связь
        const { Unit } = models;
        // создание связи
        User.Units = User.hasMany(Unit, {
            // каскадное удаление для сохранения целостности
            onDelete: 'CASCADE',
            // описание внешнего ключа
            foreignKey: {
                name: 'units_id',// имя
                allowNull: false,// не NULL
            },
        });
    }

    return User;
};
