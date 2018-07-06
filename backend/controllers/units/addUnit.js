const bcrypt = require('bcrypt');
const validate = require('validate.js');
const Sequelize = require('sequelize');

const { User } = require('../../models/index');

module.exports = {
    addUnitValidator: function (req, res, next) {
        const { body } = req;
        // валидация данных
        var constraints = {
            name: {
                presence: {
                    allowEmpty: false,
                    message: 'Им\'я відсутнє'
                }
            },
        };
        let errors = validate(body, constraints);

        if (errors !== undefined) {
            console.log('Validation errors', errors);
            res.status(400).json({ errors });
        } else {
            next();
        }
    },

    addUnit: async function (req, res) {
        const { body } = req;
        try {
            //запись в БД
            const unit = (await Unit.create({
                name: body.name,
            }));

            res.status(200).json({
                success: true,
                unitId: unit.id,
            });
        } catch (error) {
            console.error(error);
            if (error instanceof Sequelize.UniqueConstraintError) {
                res.status(409).json({
                    errors: {
                        email: ['Юнит з таким именем вже зареєстрований'],
                    }
                });
                return;
            }
            res.status(500).send();
        }
    },
};
