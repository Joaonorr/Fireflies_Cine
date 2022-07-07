// Responsável por fazer a conexão com o banco de dados

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    local: {
        localUrlDataBse: process.env.DB_URI,
        secret: "password",
    },
};