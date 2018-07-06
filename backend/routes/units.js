const express = require('express');

const router = express.Router();
const {
    addUnitValidator,
    addUnit,
} = require('../controllers/units/addUnit');

/*
 /api/auth/
 */

router.post('/add', addUnitValidator, addUnit);

module.exports = router;