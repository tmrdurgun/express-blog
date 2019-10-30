const express = require('express');
const mainRouter = express.Router();

mainRouter.use('/user', require('./user'));
mainRouter.use('/post', require('./post'));
mainRouter.use('/comment', require('./comment'));

module.exports = mainRouter;