const express = require('express');
const mainRouter = express.Router();

mainRouter.use('/user', require('./user'));
mainRouter.use('/post', require('./post'));
mainRouter.use('/comment', require('./comment'));
mainRouter.use('/auth', require('./auth'));

module.exports = mainRouter;