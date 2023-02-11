import requests from "./httpService"


class UserService {
    login(loginInfo) {
        return requests.post("/user/login", loginInfo)
    }
    register(registerInfo) {
        return requests.post('/user/register', registerInfo)
    }
    logout() {
        return requests.post('/user/logout')
    }
    forgotPassword(credential) {
        return requests.post("/user/password/forgot", credential)
    }
    verifyOtp(otpInfo) {
        return requests.post("/user/otp/verify", otpInfo)
    }
    update(id, userInfo) {
        return requests.put(`/user/update/${id}`, userInfo)
    }
    sendMail(mailInfo) {
        return requests.post('/user/sendMail', mailInfo)
    }
}


export default new UserService()