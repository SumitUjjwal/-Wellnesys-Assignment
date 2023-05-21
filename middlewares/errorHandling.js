// Invalid route handler
const invalidRouteHandler = ((req, res) => {
    res.status(404).send('Invalid route');
});

// Middleware for error handling
const errorHandler = ((err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    // Send the error response
    res.status(statusCode).json({ error: message });
});

module.exports = { invalidRouteHandler, errorHandler };