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
    async combinedOtpData(email, otp) {
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;
        return `${email}.${otp}.${expires}`;
    }
}

export default new OtpService()