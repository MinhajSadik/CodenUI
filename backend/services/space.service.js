import { CreateBucketCommand } from "@aws-sdk/client-s3";
import formidable from 'formidable';
import { s3Client } from "../configs/space.config.js";


class SpaceService {
    async createBucket(name) {
        return await s3Client.send(new CreateBucketCommand({ Bucket: name }));
    }

    async uploadFileToBucket(req, payload) {
        const form = formidable()
        form.parse(req, (error, fields, files) => {
            if (!files) {
                return send
            }
            try {
                
            } catch (error) {
                
            }
        })
        // return await s3Client.send(new PutObjectCommand(payload));
    }

}

export default new SpaceService()