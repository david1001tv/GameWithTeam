const express = requier('express');

const router = express.Router();
const {
    registerValidator,
    register,
} = require('../controllers/auth/register');