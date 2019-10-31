const postModel = require('../../models/post');

module.exports = async (req, res) => {
    postModel.aggregate([
        {
            $lookup: {
                from: 'comments', 
                localField: '_id', 
                foreignField: 'post', 
                as: 'comments' 
            },
          }
    ]).then( data => {
        res.send({
            status: 1,
            data: data
        })
    })
    .catch(err => {
        res.send({
            status: 0,
            message: err.message
        })
    });
}