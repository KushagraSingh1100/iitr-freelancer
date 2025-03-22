const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["freelancer", "employer", "admin"],
      required: true,
    },
    escrowAccountId: { type: String },
  },
  { timestamps: true }
);

const USER = mongoose.model("user", userSchema);

module.exports = USER;
