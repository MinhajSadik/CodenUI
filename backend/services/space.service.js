import { CreateBucketCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import formidable from 'formidable';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { s3Client, s3Sdk } from "../configs/space.config.js";


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

    async upload(params, fn) {
        return s3Sdk.upload(params, fn)
    }

    async uploadFileWithMulter(req, file, bucketName, cb) {
        return multer({
            storage: multerS3({
                s3: "endpoint_name",
                bucket: bucketName,
                acl: 'public-read',
                key: function () {
                    cb(null, file.originalname);
                }
            })
        }).array('upload', 1);
    }

    async uploadFileWithFormidable(req, res) {
        const form = formidable()
        // form.parse(req, (error, fields, files) => {
        //     if (!files) {
        //         return send
        //     }
        //     try {

        //     } catch (error) {

        //     }
        // })
    }

}

export default new SpaceService()