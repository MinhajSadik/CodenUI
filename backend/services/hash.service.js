import bcrypt from "bcrypt";
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

    async hashPassword(payload) {
        return await bcrypt.hash(payload, 12);
    }
}

export default new HashService()