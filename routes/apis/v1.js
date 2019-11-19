const postController = require('../../controllers/apis/post');

const express = require('express');
let router = express.Router();
router.use('/posts', postController);

module.exports = router;

