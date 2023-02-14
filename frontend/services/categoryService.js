import requests from "./httpService";

class CategoryService {
    createCategory(categoryInfo) {
        return requests.post('/category/create', categoryInfo)
    }

    findCategories() {
        return requests.get('/category/getAll')
    }

    findCategoryByName(categoryName) {
        return requests.get(`/category/getOne/${categoryName}`)
    }

    updateCategory(id, categoryInfo) {
        return requests.update(`/category/update/${id}`, categoryInfo)
    }

    deleteCategory(id) {
        return requests.delete(`/category/delete/${id}`)
    }
}


export default new CategoryService()