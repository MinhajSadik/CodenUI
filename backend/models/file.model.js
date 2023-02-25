import { model, Schema } from "mongoose";

const fileSchema = new Schema({
    file: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
});

const File = model("File", fileSchema);

export default File;