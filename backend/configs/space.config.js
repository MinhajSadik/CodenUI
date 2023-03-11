import { S3 } from "@aws-sdk/client-s3";
import Aws from 'aws-sdk';
import dotenv from "dotenv";
dotenv.config();

const spacesEndpoint = new Aws.Endpoint('https://ds-spaces.fra1.digitaloceanspaces.com');

export const s3Sdk = new Aws.S3({
    endpoint: spacesEndpoint
})

export const s3Client = new S3({
    forcePathStyle: false,
    endpoint: process.env.SPACE_ENDPOINT,
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    }
});
