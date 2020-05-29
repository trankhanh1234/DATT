import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
let adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  avatar: String,
  position: Number,
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
});
adminSchema.statics = {
  /**
   * get Data Admin
   */
  getDataAdmin() {
    return this.find().sort({ createdAt: -1 }).exec();
  },
  /**
   * get Data Admin By Id
   * @param {String} id
   */
  getDataAdminById(id) {
    return this.findById(id).exec();
  },
  /**
   * get Data Admin By username
   * @param {String} username
   */
  getDataAdminByUsername(username) {
    return this.findOne({ username: username }).exec();
  },
  /**
   * create data Admin
   * @param {Object} item
   */
  createAdmin(item) {
    return this.create(item);
  },
  /**
   * update data Admin by id, and item
   * @param {String} id
   * @param {Object} item
   */
  updateAdmin(id, item) {
    return this.findByIdAndUpdate(id, item).exec();
  },
  /**
   *delete data Admin by id
   * @param {String} id
   */
  deleteAdmin(id) {
    return this.findByIdAndDelete(id).exec();
  },
};
adminSchema.methods = {
  checkPassword(password) {
    return bcryptjs.compareSync(password, this.password);
  },
};
module.exports = mongoose.model("admin", adminSchema);
