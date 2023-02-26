import Tech from "../models/tech.model.js"


class TechService {
    async findTech(name) {
        return await Tech.findOne({ name })
    }

    async updateTech(id, payload) {
        return await Tech.findByIdAndUpdate(id, payload)
    }

    async createTech(payload) {
        return await Tech.create(payload)
    }
}


export default new TechService()