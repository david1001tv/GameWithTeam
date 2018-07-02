//Настя погнала комментить
const {DataTypes} = require('sequelize');// подключаю либы, которые необходимые для подключения к базе
module.exports = (sequelize) => {
    const User = sequelize.define('unit', { // начинаем описывать модель юнита
        id: {
            type: DataTypes.INTEGER,  // тип int
            allowNull: false,         // не разрешено быть нулем
            autoIncrement: true,      // автоинкрементное поле
            primaryKey: true,         // основной ключ
        },
        name: {
            type: DataTypes.STRING,   // тип строка
            allowNull: false,         // не может быть нулем
        },
        
    },{
        timestamps: false,            // время создания и обновление строки
        freezeTableName: true,        // разрешаем менять имя таблицы
    } );

    // а это функция, которая описывает поле FK
    Unit.associate = function (models) {
        const { Characters } = models;     // наша моделька
        User.Characters = User.belongsTo(Characters, {
            onDelete: 'CASCADE',          // типо каскадность
            foreignKey: {
                name: 'characters_id',   // поле таблицы Сharacter(к тому полю, к которому я обращаюсь) 
                allowNull: false,        // не ноль
                unique: 'FOREIGN',       // уникальный
            },
        });
    }
    return Unit; // после всего возвращаем юнит-объект
};
