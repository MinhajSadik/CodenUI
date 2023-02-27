import requestLimitter from 'express-rate-limit'

class RequestLimitter {
    static limit({ windowMs, max, message }) {
        return requestLimitter({
            windowMs, // millisec
            max, // limit each IP to max requests per window milisec
            message // a message
        })
    }
}

export default RequestLimitter