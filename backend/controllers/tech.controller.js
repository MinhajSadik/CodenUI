
import { extractImageData, imageResponse } from "../helpers/extractImageData.js";
import { generateUniqeName } from "../helpers/generateUniqeName.js";
import spaceService from "../services/space.service.js";
import techService from "../services/tech.service.js";
import { sendResponse } from "../utils/response.util.js";
import statusCode from "../utils/statusCode.util.js";


class TechController {
    async createTech(req, res, next) {
        const { name, logo, file } = req.body

        try {
            const tech = await techService.findTech(name)
            const fileRes = await imageResponse(file)
            const imageType = fileRes.getMIME().split("/")[1]

            await spaceService.createBucket(process.env.TECH_BUCKET)

            await spaceService.uploadFileToBucket({
                Bucket: process.env.USER_BUCKET,
                Key: `${generateUniqeName(name)}.${imageType}`,
                ACL: 'public-read',
                Body: extractImageData(file),
                ContentType: fileRes.getMIME(),
            })

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
            const teches = await techService.findTeches()

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