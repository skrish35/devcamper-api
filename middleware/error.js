const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    console.log(err.name);

    error.message = err.message;

    // Bad bootcamp id
    if (err.name === 'CastError') {
        const message = `Bootcamp ${error.value} not found`;
        error = new ErrorResponse(message, 404);
    }

    // Duplicate error
    if (err.code === 11000) {
        const message = `${req.body.name} already exists`;
        error = new ErrorResponse(message, 400);
    }

    // Validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((item) => item.message);
        error = new ErrorResponse(message, 400);
    }

    res
        .status(error.statusCode || 500)
        .json({
            success: false,
            error: error.message || 'Server error',
        });
}

module.exports = errorHandler;