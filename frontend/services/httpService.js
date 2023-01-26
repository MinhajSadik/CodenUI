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


instance.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config;

    if (
        error.response.status === 401 &&
        originalRequest &&
        !originalRequest._isRetry
    ) {
        originalRequest.isRetry = true

        try {
            await axios.get(`${process.env.APP_API_URL}/api/v1/user/refresh`, {
                withCredentials: true,
            })
            return instance.request(originalRequest)
        } catch (error) {
            console.error(error.message);
        }
    }
    throw error
})


export default requests