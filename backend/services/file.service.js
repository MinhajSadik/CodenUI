import File from "../models/file.model.js"


class FileService {
    async createFile(payload) {
        return File.create(payload)
    }
}

export default new FileService()