import requests from "./httpService"


class UserService {
    login(loginInfo) {
        return requests.post("user/login", loginInfo)
    }
}


export default new UserService()