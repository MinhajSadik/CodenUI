import { model, Schema } from "mongoose";

const techSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
}, {
    timestamps: true,
});

const Tech = model("Tech", techSchema);

export default Tech;