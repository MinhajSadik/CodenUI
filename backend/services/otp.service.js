import crypto from 'crypto'
class OtpService {
    async generateOtp() {
        return crypto.randomInt(1000, 9999)
    }
    async verifyOpt() {

    }
}

export default new OtpService()