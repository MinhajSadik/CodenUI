
class ErrorMiddleware {
    errorHandler(err, req, res, next) {
        switch (err.name) {
            case "CastError":
                return next(`Resouce Not Found. Invalid ${err.path}`)
            case err.code === 11000:
                return next(`Duplicate ${Object.keys(err.keyValue)} Entered`)
            case "JsonWebTokenError":
                return next(`Json Web Token is invalid, Try again `)
            case "TokenExpiredError":
                return next(`Json Web Token is Expired, Try again `)
        }
    }
}

export default new ErrorMiddleware()