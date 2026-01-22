const serverless = require('serverless-http');
const app = require('../../app.js');

const path = require('path');

const viewsPath = path.join(process.cwd(), 'views'); 

app.set('views', viewsPath);

module.exports.handler = serverless(app);
