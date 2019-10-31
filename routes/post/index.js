const express = require('express');
const postRouter = express.Router();
const authorization = require('../../utils/authorization');

postRouter.post('/add', authorization.isAuthorized, require('./add'));
postRouter.get('/all', authorization.isAuthorized, require('./all'));

module.exports = postRouter;