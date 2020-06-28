import mongoose from "mongoose";
let checkoutSchema = new mongoose.Schema({
    username: String,
    email: String,
    phoneNumber: String,
    address: String,
    listCart: [],
    totalQty: Number,
    totalPrice: Number,
    status: { type: Number, default: 0 },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null }

})
checkoutSchema.statics = {
    createCart(item) {
        return this.create(item);
    },
    getAllDataCart() {
        return this.find().sort({ createdAt: -1 }).exec();
    },
    getDataCartById(id) {
        return this.findById(id).exec();
    },
    editDataCart(id, item) {
        return this.findByIdAndUpdate(id, item).exec();
    },
    deleteDataCart(id) {
        return this.findByIdAndDelete(id).exec();
    }
}
module.exports = mongoose.model("checkout", checkoutSchema)