const serverless = require('serverless-http');
const app = require('../../app.js');
const path = require('path');
const express = require('express');

const viewsPath = path.join(process.env.PWD, 'views'); 
const publicPath = path.join(process.env.PWD, 'public');

app.use(express.static(publicPath));
app.set('views', viewsPath);

module.exports.handler = serverless(app);
