const express = require('express');
const postRouter = express.Router();

postRouter.post('/add', require('./add'));

module.exports = postRouter;