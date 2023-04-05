import requests from "./httpService";


class TechService {
    createTech(techInfo) {
        return requests.post('/tech/create', techInfo)
    }

    findTeches() {
        return requests.get("/tech/getAll")
    }

}

export default new TechService();