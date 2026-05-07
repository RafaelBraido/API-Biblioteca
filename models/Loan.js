import mongoose from "mongoose";

const loanSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      trim: true,
    },
    bookId: {
      type: String,
      required: true,
      trim: true,
    },
    dateLoan: {
      type: Number,
      required: true,
    },
    dateScheduledReturn: {
      type: Number,
      required: true,
      trim: true,
    },
    returndate: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required:  true ,
      unique: true,
      uppercase: true,
      trim: true,
      Enum: ["Returned","Returned","Active"]

    },
    fine: {
      type: Number,
      default: true,
    },
  },
  {
    collection: "Loan",
    timestamps: true,
  }
);

export default mongoose.model("Loan", loanSchema);