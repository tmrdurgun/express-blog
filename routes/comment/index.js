const express = require('express');
const commentRouter = express.Router();

commentRouter.post('/add', require('./add'));

module.exports = commentRouter;