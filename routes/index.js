const apiRoute = require('./apis');

const init = (server) => {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });
    
    server.use('/api', apiRoute);
}
module.exports = {
    init: init
};

/* const express = require('express');
const mainRouter = express.Router();

mainRouter.use('/user', require('./user'));
mainRouter.use('/post', require('./post'));
mainRouter.use('/comment', require('./comment'));
mainRouter.use('/auth', require('./auth'));

module.exports = mainRouter; */