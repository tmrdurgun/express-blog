const postModel = require('../../models/post');

module.exports = async (req, res) => {
    postModel.aggregate([
        {
            $lookup: {
                from: 'comments',
                let: { id: '$_id'},
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ['$post', '$$id']
                            }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            __v: 0
                        }
                    }
                ],
                as: 'comments',
            }
        },
        {
            $project: {
                _id: 0,
                __v: 0
            }
        }
    ]).then(data => {
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