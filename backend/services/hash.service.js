import crypto from 'crypto';


class HashService {
    async hash(payload) {
        return crypto.createHash("sha256", process.env.HASH_SECRET).update(payload).digest("hex")
    }

    async hashPassword(password) {
        // const salt = crypto.randomBytes(16).toString("hex")
        // return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha256').toString('hex');
        return this.hash(password)
    }

    async comparePassword(password, oldPassword) {
        // const hashedPassword = this.hashPassword(password)
        // console.log(hashedPassword, oldPassword)

        // return hashedPassword === oldPassword
        return await this.hashPassword(password) === oldPassword
    }

    async hashOtp(otp) {
        return await this.hash(otp)
    }
}

export default new HashService()