const serverless = require('serverless-http');
const app = require('../../app.js');
const path = require('path');
const express = require('express'); 

const viewsPath = path.join(__dirname, 'views'); 
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath)); 
app.set('views', viewsPath);

module.exports.handler = serverless(app);
