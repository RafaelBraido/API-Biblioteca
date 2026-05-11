import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      trim: true,
    },
    AuthorCategory: {
      type: String,
      required: true,
    },
    TotalQuantity: {
      type: Number,
      required: true,
    },
    AvailableQuantity: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  
  {
    collection: "book",
    timestamps: true,
  }
);

export default mongoose.model("Books", bookSchema);

