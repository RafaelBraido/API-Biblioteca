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
      type: String,
      required: true,
      enum: ["Pix", "card", "bank slip", "money", "financing"],
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "book",
    timestamps: true,
  }
);

export default mongoose.model("Books", bookSchema);

