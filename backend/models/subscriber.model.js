import { model, Schema } from "mongoose";

const subscriberSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

const Subscriber = model("Subscriber", subscriberSchema);

export default Subscriber;
