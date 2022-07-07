// Responsável por fazer a conexão com o banco de dados

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    local: {
        localDataBaseUri: process.env.DB_URI,
        secret: "password"

    }
};