import axios from 'axios'

const { PROD_APP_URL } = process.env

const responseBody = (response) => response.data
const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
})


const requests = {
    get: (url) => instance.get(url).then(responseBody),
    post: (url, payload) => instance.post(url, payload).then(responseBody),
    update: (url, id) => instance.put(url, id).then(responseBody),
    delete: (url, id) => instance.delete(url, id).then(responseBody),
}


export default requests