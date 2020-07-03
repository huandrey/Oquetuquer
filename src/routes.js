const express = require('express');
const routes = express.Router();
const AdsControllers = require('./app/controllers/AdsControllers');

routes.get('/', AdsControllers.index);

routes.get('/register', AdsControllers.register);

routes.get('/login', AdsControllers.login);

routes.get('/create/ads', AdsControllers.create);
routes.post('/ads', AdsControllers.post);

module.exports = routes;