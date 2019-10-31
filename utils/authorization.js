const jwt = require('jsonwebtoken');

const isAuthorized = (req, res, next) => {
    jwt.verify(
        req.headers.authorization,
        process.env.SECRET,
        (err, decoded) => {
            if (err) {
                return res.json({
                    type: 0,
                    message: 'token is not valid'
                })
            } else {
                req.decoded = decoded;
                
                return next();
            }
        }
    )
};

module.exports = {
    isAuthorized: isAuthorized
};