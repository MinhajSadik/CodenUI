import axios from 'axios'

const { PROD_APP_URL } = process.env
const responseBody = (response) => response.data.data

const API = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
})

export const login = (loginInfo) => API.post('user/login', loginInfo)

const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    withCredentials: true,
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



// export default requests
export default API