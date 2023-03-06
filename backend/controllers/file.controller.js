import fileService from "../services/file.service.js"
import { sendResponse } from "../utils/response.util.js"



class FileController {
    async createFile(req, res, next) {
        try {
            const file = await fileService.createFile(req.body)

            if (!file) {
                return sendResponse(res, 404, {
                    message: "File Not Found"
                })
            }

            return sendResponse(res, 201, {
                message: "New file Created!",
                file
            })
        } catch (error) {
            return next(error)
        }
    }
}

export default new FileController()