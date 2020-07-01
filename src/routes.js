const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send({ info: 'Welcome' });
});

module.exports = routes;