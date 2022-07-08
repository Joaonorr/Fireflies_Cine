// Responsável por toda configuração e execução da aplicação

const express = require('express');
const cors = require('cors');
const mongooseConnection = require('./config/mongooseConnection.config');
const morgan = require('morgan');

const app = express();

// Rotas da API:
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');

// Declarar rotas user.routes.js

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type: 'application/vnd.api+json'}));
app.use(cors());

app.set('mongoose connection', mongooseConnection);

app.use(morgan('dev'));

app.use(index);
app.use('/api/v1', userRoutes);
// incluir depois a chamada da rota 'user.routes.js'

module.exports = app;