const sequelize = require('./sequelize');// подрубаем базу
const Units = require('../constants/Units');
const Characters = require('../constants/Characters');

const models = {}; // это объект, в котором будут модели

[
    require('./User'),
    require('./Unit'),
    require('./Character'),
].forEach((e) => {
    const model = e(sequelize);// создаем объект модели
    let modelName = model.name.split('_').map(e => e[0].toUpperCase() + e.slice(1)).join('');// ключ для ассоциативного массива
    models[modelName] = model;//записываем в этот объект данные 
});

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});



module.exports = models;// экспортируем модельки
