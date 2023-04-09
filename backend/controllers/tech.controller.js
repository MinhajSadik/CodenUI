
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
            const files = [logo, file]
            const tech = await techService.findTech(name)

            return files.forEach(async (file, index) => {
                const techRes = await imageResponse(file)
                const techFileType = techRes.getMIME().split("/")[1]

                await spaceService.createBucket(process.env.TECH_BUCKET)

                await spaceService.uploadFileToBucket({
                    Bucket: process.env.TECH_BUCKET,
                    Key: `${generateUniqeName(name)}.${techFileType}`,
                    ACL: 'public-read',
                    Body: extractImageData(file),
                    ContentType: techRes.getMIME(),
                })

                const fileInfo = {
                    ...req.body,
                    logo: `${process.env.SPACE_ENDPOINT}/${process.env.TECH_BUCKET}/${generateUniqeName(name)}.${techFileType}`,
                    file: `${process.env.SPACE_ENDPOINT}/${process.env.TECH_BUCKET}/${generateUniqeName(name)}.${techFileType}`
                }

                if (tech) {

                    const updatedTech = await techService.updateTech(tech._id, `${process.env.SPACE_ENDPOINT}/${process.env.TECH_BUCKET}/${generateUniqeName(name)}.${techFileType}`)

                    return sendResponse(res, statusCode.OK, {
                        message: `Tech ${name} Modified`,
                        updatedTech
                    })
                }

                if (!tech) {
                    const newTech = await techService.createTech(fileInfo)
                    return sendResponse(res, statusCode.CREATED, {
                        message: `Tech ${name} created!`,
                        newTech
                    })
                }
            })
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

    async uploadTechFile() {

    }
}


export default new TechController()