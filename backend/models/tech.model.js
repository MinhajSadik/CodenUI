import { model, Schema } from "mongoose";

const techSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: false
    },
    file: {
        type: Schema.Types.ObjectId,
        required: false
    }
}, {
    timestamps: true,
});

const Tech = model("Tech", techSchema);

export default Tech;