const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
}, { collection: 'posts' });

module.exports = mongoose.model('Post', postSchema);