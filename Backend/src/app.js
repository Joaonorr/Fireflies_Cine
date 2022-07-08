// Responsável por toda configuração e execução da aplicação

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

// importar o db.config.js
const database = require('./config/db.config'); // conexão local com o banco de dados
console.log(database.local)

mongoose.Promise = global.Promise;

// conexão da base de dados
mongoose.connect('mongodb://localhost:27017/jwtAuthDb').then(() => {
    console.log('Database is connected');
}).catch(err => {
    console.log('Database connection error: ' + err);
    process.exit();
});


// Rotas da API:
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');

// Declarar rotas user.routes.js

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());
app.use(morgan('dev'));

app.use(index);
app.use('/api/v1', userRoutes);
// incluir depois a chamada da rota 'user.routes.js'

module.exports = app;