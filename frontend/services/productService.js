import requests from "./httpService";


class ProductService {
    createProduct() {
        return requests.post()
    }
}

export default new ProductService();