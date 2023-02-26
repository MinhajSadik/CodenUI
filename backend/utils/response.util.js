export const sendResponse = (response, statusCode, jsonObj) => {
  response
    .status(statusCode || 500)
    .json(jsonObj || { message: "Internal Server Error!" });
};
