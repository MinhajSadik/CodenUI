import requests from "./httpService";



class CategoryService {
    createCategory() {
        return requests.post()
    }
    findCategories() {
        return requests.get()
    }
}


export default new CategoryService()