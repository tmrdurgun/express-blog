const express = require('express');
const commentRouter = express.Router();
const authorization = require('../../utils/authorization');

commentRouter.post('/add', authorization.isAuthorized, require('./add'));

module.exports = commentRouter;