
import techService from "../services/tech.service.js";
import { sendResponse } from "../utils/response.util.js";

class TechController {
    async createTech(req, res, next) {
        const { name, logo, file } = req.body
        try {
            const tech = await techService.findTech(name)

            if (tech) {
                const updatedTech = await techService.updateTech(tech._id, file)
                return sendResponse(res,)
            }

            if (!tech) {
                const newTech = await techService.createTech(req.body)
                return sendResponse(res, 201, {
                    message: `Tech ${name} created!`,
                    newTech
                })
            }
        } catch (error) {
            return sendResponse(res, 500, {
                message: error.message
            })
        }
    }
}


export default new TechController()