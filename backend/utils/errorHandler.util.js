
//uses
// throw new ErrorHandler(500, error);
// next(new ErrorHandler(error.statusCode || 500, error.message))
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}




export default ErrorHandler