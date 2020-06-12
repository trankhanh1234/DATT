import mongoose from "mongoose";
let productSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, required: null }
})
productSchema.statics = {
    getAllDataBlog() {
        return this.find().sort({ createdAt: -1 }).exec();
    },
    countDataBlog() {
        return this.countDocuments().exec();
    },
    getBlogById(id) {
        return this.findById(id);
    },
    getDataByTitle(title) {
        return this.findOne({ title: title });
    },
    searchDataBlog(item) {
        return this.find({ title: { $regex: new RegExp(item, "i") } });
    },
    createBlog(item) {
        return this.create(item);
    },
    updateBlog(id, item) {
        return this.findByIdAndUpdate(id, item).exec()
    },
    deleteBlog(id) {
        return this.findByIdAndDelete(id).exec()
    }
}
module.exports = mongoose.model("product", productSchema);