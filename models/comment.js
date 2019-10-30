const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
}, { collection: 'comments' });

module.exports = mongoose.model('Comment', commentSchema);