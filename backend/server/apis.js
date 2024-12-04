const express = require("express");

let apis = (app) => {
    app.use(express.json());
    app.use('/api/card', require('../routers/Card'));
    app.use('/api/auth', require('../routers/User'));
};

module.exports = apis;