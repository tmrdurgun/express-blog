const postModel = require('../../models/post');

const getPosts = async (req, res, next) => {
    try {
        const result = postModel.aggregate([
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
        ]);
        
        res.send({
            status: 1,
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'something went wrong, Please try again'
        });
    }
}

module.exports = {
    getPosts: getPosts
}