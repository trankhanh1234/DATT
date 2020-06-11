import checkoutModel from "./../models/checkout.model";
import sendMail from "./../config/sendMail";
let addDataToCart = (item) => {
    return new Promise(async(resolve, rejcect) => {
        try {
            await checkoutModel.createCart(item);
            sendMail(item.email, "DAT Hang thanh cong", "<h2>hihih</h2>");
            resolve(true)
        } catch (error) {
            console.log("Loi");

            console.log(error);

        }

    })
}
module.exports = {
    addDataToCart
}