//Настя погнала комментить
const {DataTypes} = require('sequelize');// подключаю либы, которые необходимые для подключения к базе
module.exports = (sequelize) => {
    // описfybt модель юнита
    const Unit = sequelize.define('unit', {
        id: {
            type: DataTypes.INTEGER,  // тип int
            allowNull: false,         // не NULL
            autoIncrement: true,      // автоинкрементное поле
            primaryKey: true,         // основной ключ
        },
        name: {
            type: DataTypes.STRING,   // тип строка
            allowNull: false,         // не NULL
            unique: true,
        },
        
    },{
        timestamps: false,            // время создания и обновление строки
        freezeTableName: true,        // разрешаем менять имя таблицы
    } );

    /**
     * Фнукция создания внешних ключей для модели Unit
     * @param {*} models объект (ассоциативный массив) с моделями
     */
    Unit.associate = function (models) {
        // модели, к которым делается привязка
        const { User, Characters } = models;
        Unit.Characters = Unit.belongsTo(Characters, {
            // каскадное удаление для сохранения целостности данных
            onDelete: 'CASCADE',
            // описание поля (внешнего ключа) 
            foreignKey: {
                name: 'characters_id',// имя
                allowNull: false,// не NULL
                unique: 'FOREIGN',// уникальное
            },
        });
        Unit.User = Unit.belongsTo(User, {
            // каскадное удаление для сохранения целостности данных
            onDelete: 'CASCADE',
            // описан е внешнего ключа
            foreignKey: {
                name: 'user_id',// имя
                allowNull: false,// не NULL
                unique: 'FOREIGN',// уникальный
            },
        });
    }
    return Unit; // после всего возвращаем юнит-объект
};
