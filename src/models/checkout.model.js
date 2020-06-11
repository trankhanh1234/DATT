import mongoose from "mongoose";
let checkoutSchema = mongoose.Schema({
    username: String,
    email: String,
    phoneNumber: String,
    address: String,
    listCart: [],
    totalQty: Number,
    totalPrice: Number,
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: null }

})
checkoutSchema.statics = {
    createCart(item) {
        return this.create(item);
    }
}
module.exports = mongoose.model("checkout", checkoutSchema)