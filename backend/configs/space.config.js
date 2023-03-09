import { S3 } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();


export const s3Client = new S3({
    forcePathStyle: false, // Configures to use subdomain/virtual calling format.
    endpoint: process.env.SPACE_ENDPOINT,
    region: process.env.REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY
    }
});


