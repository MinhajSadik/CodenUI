import requests from "./httpService";


class ProductService {
    createProduct(productInfo) {
        return requests.post('/product/create', productInfo)
    }
    findProducts() {
        return requests.get("/product/getAll")
    }
    updateProduct(id, productInfo) {
        return requests.update(`/product/update/${id}`, productInfo)
    }
    deleteProduct(id) {
        return requests.delete(`/product/delete/${id}`)
    }
}

export default new ProductService();