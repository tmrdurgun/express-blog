const express = require('express');
const postRouter = express.Router();

postRouter.post('/add', require('./add'));
postRouter.get('/all', require('./all'));

module.exports = postRouter;