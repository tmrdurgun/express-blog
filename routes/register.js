const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const md5 = require('md5');
const userHelper = require('../utils/user');

router.post('/', async (req, res) => {
    const isUserExist = await userHelper.isUserExist(req.body.email);

    if(isUserExist) {
        res.send({
            type: 0,
            message: 'User already exist.'
        });
    } else {
        const newUser = {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: md5(req.body.password)
        };
    
        await userModel.create(newUser).then( result => {
            res.send({
                type: 1,
                message: 'User successfully registered.'
            });
        }).catch( err => {
            res.send({
                type: 0,
                message: err.toString()
            });
        });
    }

    

});



module.exports = router;