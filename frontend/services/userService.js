import requests from "./httpService"


class UserService {
    login(loginInfo) {
        return requests.post("/user/login", loginInfo)
    }
    register(registerInfo) {
        return requests.post('/user/register', registerInfo)
    }
}


export default new UserService()