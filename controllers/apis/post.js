const express = require('express');
const postService = require('../../services/posts/post');
let router = express.Router();

router.get('/', postService.getPosts);

module.exports = router;