// Reponsável por confirmar se um determinado usuário tem autorização para logar

const { response } = require('express');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        const token = header.replace('Bearer ', '');
      
        const decoded = jwt.verify(token, 'secret');
        res.userData = decoded;
        next();
    }
    catch(err) {
        return res.status(401).json({message: err})
    }
    
}