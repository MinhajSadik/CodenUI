import Tech from "../models/tech.model.js"


class TechService {
    async createTech(payload) {
        return await Tech.create(payload)
    }

    async findTech(name) {
        return await Tech.findOne({ name })
    }

    async findTeches() {
        return Tech.find({})
    }

    async updateTech(id, payload) {
        return await Tech.findByIdAndUpdate(id, {
            file: payload
        }, { new: true })
    }
}


export default new TechService()