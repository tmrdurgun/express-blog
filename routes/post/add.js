const postModel = require('../../models/post');
const { ObjectId: objectId } = require('mongodb');

module.exports = async (req, res) => {
    const newItem = {
        title: req.body.title,
        text: req.body.text,
        author: objectId(req.body.author)
    };

    await postModel.create(newItem).then(result => {
        res.send({
            type: 1,
            message: 'New post added successfully.'
        })
    }).catch(err => {
        res.send(
            {
                type: 0,
                message: 'Post add failed. ' + err.message
            }
        );
    })
};