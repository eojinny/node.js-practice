const express = require('./config/express');
const {logger} = require('./config/winston');
const routes = require('./Routes/home.js');
const app = express();

const port = 3000;
app.listen(port);
logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);

app.use('/', routes);