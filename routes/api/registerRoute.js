const express = require('express');
const router = express.Router();
const path = require('path');

const regController = require('../../controllers/registerController')

router.post('/',regController.handleNewUser);

module.exports = router