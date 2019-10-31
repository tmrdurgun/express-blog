const userModel = require('../../models/user');
const md5 = require('md5');
const userHelper = require('../../utils/user');

module.exports = async (req, res) => {
    const isUserExist = await userHelper.isUserExist(req.body.email);

    if (isUserExist) {
        res.send({
            status: 0,
            message: 'User already exist.'
        });
    } else {
        const newUser = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: md5(req.body.password)
        };

        await userModel.create(newUser).then(result => {
            res.send({
                status: 1,
                message: 'User successfully registered.'
            });
        }).catch(err => {
            res.send({
                status: 0,
                message: err.toString()
            });
        });
    }

};
