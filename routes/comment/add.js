const commentModel = require('../../models/comment');
const { ObjectId: objectId } = require('mongodb');

module.exports = async (req, res) => {
    const newItem = {
        text: req.body.text,
        post: objectId(req.body.post)
    };

    await commentModel.create(newItem).then(result => {
        res.send({
            status: 1,
            message: 'Comment saved.'
        })
    }).catch(err => {
        res.send(
            {
                status: 0,
                message: 'Comment save failed. ' + err.message
            }
        );
    })
};