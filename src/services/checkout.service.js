import checkoutModel from "./../models/checkout.model";
import sendMail from "./../config/sendMail";
import productModel from "./../models/product.model";

let addDataToCart = (item) => {
    return new Promise(async(resolve, rejcect) => {
        try {
            let dataProduct = await productModel.getAllDataProduct();
            for (let i = 0; i < item.listCart.length; i++) {
                for (let j = 0; j < dataProduct.length; j++) {
                    if (dataProduct[j]._id == item.listCart[i].idItem) {
                        if (dataProduct[j].quality < item.listCart[i].soluong) {
                            return rejcect("Số lượng mua vượt quá số lượng sản phẩm có trong shop, hãy đặt lại số lượng sản phẩm phù hợp")
                        }
                    }
                }
            }
            await checkoutModel.createCart(item);
            for (let i = 0; i < item.listCart.length; i++) {
                for (let j = 0; j < dataProduct.length; j++) {
                    if (dataProduct[j]._id == item.listCart[i].idItem) {
                        let newQuality = dataProduct[j].quality - item.listCart[i].soluong;
                        await productModel.updateProduct(dataProduct[j]._id, { quality: newQuality })
                    }
                }
            }

            sendMail(item.email, "DAT Hang thanh cong");
            resolve(true);
        } catch (error) {
            rejcect(error)
        }

    })
}
let getAllDataCart = () => {
    return new Promise(async(resolve, rejcect) => {
        let getAllDataCart = await checkoutModel.getAllDataCart();
        resolve(getAllDataCart)
    })
}
let getDataCartById = (id) => {
    return new Promise(async(resolve, rejcect) => {
        let getDataCartById = await checkoutModel.getDataCartById(id);
        resolve(getDataCartById);
    })
}
let deleteDataCart = (id) => {
    return new Promise(async(resolve, rejcect) => {
        let deleteDataCart = await checkoutModel.deleteDataCart(id);
        resolve(deleteDataCart);
    })
}
module.exports = {
    addDataToCart,
    getAllDataCart,
    getDataCartById,
    deleteDataCart
}