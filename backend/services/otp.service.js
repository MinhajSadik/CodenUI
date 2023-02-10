import crypto from 'crypto'
import hashService from './hash.service.js'
class OtpService {
    async generateOtp() {
        return crypto.randomInt(1000, 9999)
    }
    async verifyOtp(hashedOtp, data) {
        const computedHash = await hashService.hashOtp(data)
        return computedHash === hashedOtp
    }
}

export default new OtpService()