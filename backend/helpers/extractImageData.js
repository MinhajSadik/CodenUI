
export const extractImageData = (imageData) => {
    return Buffer.from(
        imageData.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
        "base64"
    );
}