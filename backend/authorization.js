const bcrypt = require('bcrypt');
const validate = require('validate.js');
const {User} = require('../../models/index');

//валидация аутенфикации
module.exports = {
authValidator: function(req, res, next) {
	const {body} = req;
	var constrains_email = {
		email: {
			 presence: {
                    allowEmpty: false,            
                    message: 'Емаіл відсутній!'
                },
             email: {
                    message: 'Емаіл не відповідає формату'
                },
		    },
		password:{
			 presence: {
                    allowEmpty: false,
                    message: 'Пароль відсутній'
                },
             length: {
                    minimum: 6,
                    maximum: 30,
                    message: 'Пароль занадто короткий/довгий'
            }// конец length
		}//конец password
	};// конец constrains_email 
	var constrains_login = {
		login: {
			presence: {
                    allowEmpty: false,            
                    message: 'Логiн відсутній!'
                }
		    },
		password:{
			 presence: {
                    allowEmpty: false,
                    message: 'Пароль відсутній'
                },
             length: {
                    minimum: 6,
                    maximum: 30,
                    message: 'Пароль занадто короткий/довгий'
            }// конец length
		}//конец password    
	};// конец constrains_login 
	let errors_email = validate(body, constrains_email);
	let errors_login = validate(body, constrains_login);

  if ((errors_email !== undefined) && (errors_login !== undefined))   {
        console.log('Validation errors email: ', errors_email);
        console.log('Validation errors login: ', errors_login);
        res.status(400).json({errors_email});
        res.status(400).json({errors_login});
    } 
  else {
            next();
        }
    },// конец authValidator
authorization: async function (req, res) {
  const {body} = req;
 // проверка пароля 
if (body.email !== null) {
const user = await User.findOne({
where:{ 
 		  email: body.email, // выбираем с базы по емайлу
 	 } 
 }); 

if (user === null) { // если пользователь идентичен Null
res.status(400).json({ // вернуть код ошибки
errors: { 
			generic: ['Невірний e-mail або пароль'] // сгенерировать сообщение об ошибке
		} 
	}); 
return; 
	}
}
// проверка логина
else if (body.login !== null) {

const user = await User.findOne({
	where:{
			login: body.login, // берем с базы логин
	}
});

if (user === null) {
  res.status(409).json({
	errors:{
		generic: ['Такого login\'у  не iснує!'] 
	}
});
return;
    }
   }
if (await bcrypt.compare(body.password, hash.password)) {
     res.status(200).json({
     	success: true,
        token: { accessToken: '', refreshToken: '', expiresIn: '2d' }// Давид, не матерись, пожалуйста, я пытаюсь понять токены
     })
}
else{
    res.status(400).json({
    	errors: { 
    			generic: ['Неверный пароль']
    		 } 
        });
 return;
     }
   }
};




     






