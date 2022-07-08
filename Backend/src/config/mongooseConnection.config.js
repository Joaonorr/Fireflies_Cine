// importar o db.config.js
const express = require('express');
const mongoose = require('mongoose');

const database = require('./db.config'); // conexão local com o banco de dados

mongoose.Promise = global.Promise;

// conexão da base de dados
mongoose.connect(database.local.localUrlDataBse).then(() => {
    console.log('Database is connected');
}).catch(err => {
    console.log('Database connection error: ' + err);
    process.exit();
});