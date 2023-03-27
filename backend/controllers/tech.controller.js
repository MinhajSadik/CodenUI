
import techService from "../services/tech.service.js";
import { sendResponse } from "../utils/response.util.js";
import statusCode from "../utils/statusCode.util.js";


class TechController {
    async createTech(req, res, next) {
        const { name, logo, file } = req.body

        try {
            const tech = await techService.findTech(name)

            if (tech) {
                const updatedTech = await techService.updateTech(tech._id, file)

                return sendResponse(res, statusCode.OK, {
                    message: `Tech ${name} Modified`,
                    updatedTech
                })
            }

            if (!tech) {
                const newTech = await techService.createTech(req.body)
                return sendResponse(res, statusCode.CREATED, {
                    message: `Tech ${name} created!`,
                    newTech
                })
            }
        } catch (error) {
            return next(error)
        }
    }

    async findTeches(req, res, next) {
        try {
            const teches = await techService.findTeches(req.body.file)

            console.log(teches)

            if (!teches.length) {
                return sendResponse(res, statusCode.NOT_FOUND, {
                    message: "There are no tech"
                })
            }

            return sendResponse(res, statusCode.OK, {
                message: `${teches.length} teches are available`,
                teches
            })
        } catch (error) {
            return sendResponse(res, statusCode.INTERNAL_SERVER_ERROR, {
                message: error.message
            })
        }
    }
}


export default new TechController()