const express = require('express');

const router = express.Router();
const {
    registerValidator,
    register,
} = require('../controllers/auth/register');

/*
 /api/auth/
 */

router.post('/register', registerValidator, register);

module.exports = router;