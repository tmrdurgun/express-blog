require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

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

app.listen(port, () => {
    console.log('app started');   
});

const registerRouter = require('./routes/register');

app.use('/register', registerRouter);
