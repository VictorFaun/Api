import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        adjunto: {
            type: String,
            unique: false,
        },
        club: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Club",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        description: {
            type: String,
            required: false,
        },
        type: {
            type: Number,
            default: 1
        },
        state: {
            type: Number,
            unique: false,
            default: 1
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Payment", paymentSchema);
