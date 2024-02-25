import mongoose from "mongoose";

const clubSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        description: {
            type: String,
            required: false,
        },
        icon: {
            type: String,
            required: false,
        },
        front: {
            type: String,
            required: false,
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

export default mongoose.model("Club", clubSchema);