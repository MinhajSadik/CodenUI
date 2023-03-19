const statusCode = {
    "CONTINUE": 100,
    'PROCESSING': 102,
    "OK": 200,
    'CREATED': 201,
    'ACCEPTED': 202,
    'NOT_AUTHORITATIVE_INFORMATION': 203,
    'NO_CONTENT': 204,
    'RESET_CONTENT': 205,
    'MULTI_STATUS': 207,
    'MOVED_PERMANENTLY': 301,
    'MOVED_TEMPORARILY': 302,
    'NOT_MODIFIED': 304,
    'TEMPORARY_REDIRECT': 307,
    'BAD_REQUEST': 400,
    'UNAUTHORIZED': 401,
    'PAYMENT_REQUIRED': 402,
    'FORBIDDEN': 403,
    'NOT_FOUND': 404,
    'METHOD_NOT_ALLOWED': 405,
    'NOT_ACCEPTABLE': 406,
    'REQUEST_TIMEOUT': 408,
    'CONFLICT': 409,
    'ENTITY_TOO_LARGE': 413,
    'URI_TOO_LARGE': 414,
    'UNSUPPORTED_MEDIA_TYPE': 415,
    'TOO_MANY_REQ': 429,
    'REQ_HEADER_TOO_LARGE': 431,
    'INTERNAL_SERVER_ERROR': 500,
    'NOT_IMPLEMENTED': 501,
    'BAD_GATEWAY': 502,
    'GATEWAY_TIMEOUT': 504,
}


export default statusCode