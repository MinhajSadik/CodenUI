import { CreateBucketCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../configs/space.config.js";


class SpaceService {
    async createBucket(name) {
        return await s3Client.send(new CreateBucketCommand({ Bucket: name }));
    }

    async uploadFileToBucket(params) {
        return await s3Client.send(new PutObjectCommand(params));
    }

    async getFileFromBucket(params) {
        return await s3Client.send(new GetObjectCommand(params));
    }

    async upload(params) {
        s3Client.uploadPart(params, (error, data) => {
            if (error)
                console.log({ error })
            else
                console.log({ data })
        })
    }
}

export default new SpaceService()