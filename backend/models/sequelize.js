const Sequelize = require('sequelize');// подгружаем модель базы
const config = require('../config'); // подгружаем саму базу
// описание настроек базы
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: 'localhost',
    port: config.db.port,
    dialect: 'mysql',
    pool: {     // кол-во макс соединений (одновременных соединений)
        max: 5, // 5 клиентов могут подсоединиться к БД
        min: 0, // аналогично минимум
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: false, // псевдонимы
    define: {
        charset: 'utf8',            // кодировка 
        collate: 'utf8_general_ci', // сравнение
    },
    logging: false, // нужна ли авторизация при входе?
});

module.exports = sequelize; // экспортируем базу
