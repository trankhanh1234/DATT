import mongoose from "mongoose";
let providerSchema = new mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  avatar: String,
  phoneNumber: Number,
  address: String,
  status: { type: Boolean, default: false },
  keyActive: String,
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
});
providerSchema.statics = {
  /**
   * get Data Admin
   */
  getDataProvider() {
    return this.find().sort({ createdAt: -1 }).exec();
  },
  /**
   * get Data Admin By Id
   * @param {String} id
   */
  getDataProviderById(id) {
    return this.findById(id).exec();
  },
  /**
   * get Data Admin By username
   * @param {String} username
   */
  getDataProviderByUsername(username) {
    return this.findOne({ username: username }).exec();
  },
  /**
   * create data Admin
   * @param {Object} item
   */
  createProvider(item) {
    return this.create(item);
  },
  /**
   * update data Admin by id, and item
   * @param {String} id
   * @param {Object} item
   */
  updateProvider(id, item) {
    return this.findByIdAndUpdate(id, item).exec();
  },
  /**
   *delete data Admin by id
   * @param {String} id
   */
  deleteProvider(id) {
    return this.findByIdAndDelete(id).exec();
  },
};
module.exports = mongoose.model("provider", providerSchema);
