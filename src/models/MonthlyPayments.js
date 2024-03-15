import mongoose from "mongoose";

const monthlyPaymentSchema = new mongoose.Schema(
    {
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
        month:{
            type: String
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

export default mongoose.model("MonthlyPayment", monthlyPaymentSchema);
