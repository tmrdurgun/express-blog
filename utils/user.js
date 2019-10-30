const userModel = require('../models/user');

const isUserExist = async (userEmail) => {
    let result = false;

    await userModel.findOne({email: userEmail}).then( data => {
        if(data) {
            result = true    
        }
    });

    return result;
}

exports.isUserExist = isUserExist;