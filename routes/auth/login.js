const userModel = require('../../models/user');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {

    await userModel.find({ email: req.body.email, password: md5 }).then(result => {
        // create jwt & send
        const token = jwt.sign(
            { email: result.email },
            process.env.SECRET,
            { expiresIn: '24h' }
        );

        res.send({
            type: 1,
            message: 'Login successful!',
            token: token
        });
    }).catch(err => {
        res.send(
            {
                type: 0,
                message: 'Login failed. ' + err.message
            }
        );
    })
};