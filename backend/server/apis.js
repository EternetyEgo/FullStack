const express = require("express");

let apis = (app) => {
    app.use(express.json());
    app.use(express.static('public'))

    app.use('/api/card', require('../routers/Card'));
    app.use('/api/user', require('../routers/User'));
    app.use('/api/image', require('../routers/upload'))
    app.use('/api/comment', require('../routers/Comment'))
};

module.exports = apis;