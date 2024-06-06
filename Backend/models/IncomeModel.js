const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // get rids of spaces
      maxLength: 50,
    },
    amount: {
      type: Number,
      required: true,
      trim: true, // get rids of spaces
      maxLength: 20,
    },
    type: {
      type: String,
      default: "Income",
    },
    date: {
      type: Date,
      required: true,
      trim: true, // get rids of spaces
    },
    category: {
      type: String,
      required: true,
      trim: true, // get rids of spaces
    },
    description: {
      type: String,
      required: true,
      maxLength: 50,
      trim: true, // get rids of spaces
    },
  },
  { timestamps: true }
); // essentially going to be created & updated at the current time

module.exports = mongoose.model("Income", IncomeSchema);
