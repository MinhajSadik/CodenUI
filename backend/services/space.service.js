import { CreateBucketCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../configs/space.config.js";


class SpaceService {
    async createBucket(name) {
        return await s3Client.send(new CreateBucketCommand({ Bucket: name }));
    }

    async uploadFileToBucket(payload) {
        return await s3Client.send(new PutObjectCommand(payload));
    }

}

export default new SpaceService()