import fs from 'fs';
import Jimp from 'jimp';

export const extractImageData = (imageData) => {
    return Buffer.from(
        imageData.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
        "base64"
    );
}

export const imageResponse = async (image) => {
    return await Jimp.read(extractImageData(image))
}
