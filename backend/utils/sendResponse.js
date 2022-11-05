export const sendResponse = (res, statusCode, jsonObj) => {
  res
    .status(statusCode || 500)
    .json(jsonObj || { message: "Internal Server Error!" });
};
