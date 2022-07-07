// Responsável pela rota default da API

const express = require('express');

const router = express.Router();

router.get('/api/v1', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Welcome to the API',
        version: '1.0.0'
    });
});

module.exports = router;