require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

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

/* Accept json */
app.use(express.json());

/* Regiser Routes*/
app.use('/', require('./routes'));

/* Listen port */
app.listen(process.env.PORT, () => {
    console.log('app started');
});