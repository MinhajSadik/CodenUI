import { model, Schema } from "mongoose";

const iconSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    techStack: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tech"
        },
    ],
}, {
    timestamps: true,
});

const Icon = model("Icon", iconSchema);

export default Icon;