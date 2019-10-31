const express = require('express');
const authRouter = express.Router();

authRouter.post('/login', require('./login'));

module.exports = authRouter;