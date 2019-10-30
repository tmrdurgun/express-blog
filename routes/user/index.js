const express = require('express');
const userRouter = express.Router();

userRouter.post('register', require('./register'));

module.exports = userRouter;