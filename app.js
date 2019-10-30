require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const registerRouter = require('./routes/register');
const postRouter = require('./routes/post');
const commentRouter = require('./routes/comment');

mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Db connection success');
    }).catch((err) => {
        console.log('Db connection failed: ' + err);
    });

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('app started');
});

app.use('/register', registerRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);

