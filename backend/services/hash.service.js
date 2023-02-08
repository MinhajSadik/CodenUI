import crypto from 'crypto';

class HashService {
    async hash(email, otp) {
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;
        return `${email}.${otp}.${expires}`;
    }
    async hashOtp(payload) {
        return crypto.createHash("sha256", process.env.HASH_SECRET).update(payload).digest("hex")
    }
}

export default new HashService()