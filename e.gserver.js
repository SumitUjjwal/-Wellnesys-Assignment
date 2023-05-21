const express = require('express');
require('dotenv').config();

const { router } = require('./routes/routes');
const { logger } = require('./middlewares/logger');
const { invalidRouteHandler, errorHandler } = require('./middlewares/errorHandling');

const app = express();
app.use(express.json());

app.use(logger);

// Handle GET requests for the root URL ("/") and display a welcome message
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the API! \n This is an web application built with Node.js and Express.js.');
});

app.use('/api', router);

app.use(invalidRouteHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});
