const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
};

const errorHandler = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        error: err.message
    });
}

export { notFound, errorHandler }