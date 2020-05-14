import mongoose from "mongoose";
let adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  avatar: String,
  position: Number,
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
});
module.exports = mongoose.model("admin", adminSchema);
