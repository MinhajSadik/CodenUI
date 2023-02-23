import requestLimitter from 'express-rate-limit'

class RequestLimitter {
    requestLimit(windowMs, max, message) {
        return requestLimitter({
            windowMs, // millisec
            max, // limit each IP to 6 requests per windowMs
            message // a message
        })
    }
}

export default new RequestLimitter()