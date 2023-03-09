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

    resetPassword(passwordInfo) {
        return requests.post('/user/password/reset', passwordInfo)
    }

    updatePassword(passwordInfo) {
        return requests.post('/user/password/update', passwordInfo)
    }

    subscriber(subscriberInfo) {
        return requests.post('/user/subscriber', subscriberInfo)
    }

    countUser() {
        return requests.get("user/count")
    }

    updateUser(id, userUpdateInfo) {
        return requests.update(`/user/update/${id}`, userUpdateInfo)
    }

    sendMail(mailInfo) {
        return requests.post('/user/sendMail', mailInfo)
    }

}


export default new UserService()