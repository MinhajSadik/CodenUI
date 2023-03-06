import { model, Schema } from "mongoose";

const refreshSchema = new Schema(
    {
        token: {
            type: String,
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        expiries: {
            type: Date,
            default: Date.now()
        }
    }
);

const Token = model("Token", refreshSchema);

export default Token;