require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

/* Db connection */
mongoose.connect(process.env.DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Db connection success');
    }).catch((err) => {
        console.log('Db connection failed: ' + err);
    });

mongoose.set('useCreateIndex', true);

/* Accept json */
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

/* Regiser Routes*/
app.use('/', require('./routes'));

/* Listen port */
app.listen(process.env.PORT, () => {
    console.log('app started');
});