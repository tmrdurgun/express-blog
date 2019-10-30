const commentModel = require('../../models/comment');
const { ObjectId: objectId } = require('mongodb');

module.exports = async (req, res) => {
    const newItem = {
        text: req.body.text,
        post: objectId(req.body.post)
    };

    await commentModel.create(newItem).then(result => {
        res.send({
            type: 1,
            message: 'Comment saved.'
        })
    }).catch(err => {
        res.send(
            {
                type: 0,
                message: 'Comment save failed. ' + err.message
            }
        );
    })
};