import checkoutModel from "./../models/checkout.model";
import sendMail from "./../config/sendMail";
import productModel from "./../models/product.model";

import { transMail } from "./../../en/en.lang";
import { Telegraf } from "telegraf"
import moment from "moment"
const bot = new Telegraf("1353477328:AAEFzfyEq4wNYDy2C8nUZG0y-NSh4lYCmRA");
bot.start((ctx) => {
    console.log(ctx);

    ctx.reply('Welcome!')
})
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => {
    console.log(ctx.from.id);

    ctx.reply('Hey there')
})
bot.launch()
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
            console.log(Date.now());
            let formatDate = moment().locale("vi").format('LLLL')

            bot.telegram.sendMessage(810913292, `Một đơn hàng vừa được đặt vào lúc: ${formatDate} \nNgười đặt:${item.username}\nĐịa chỉ: ${item.address}\nSố điện thoại: ${item.phoneNumber}`).then(function(resp) {
                console.log("Send success");

            }).catch(function(error) {
                console.log("Error: " + error);

            });
            sendMail(item.email, transMail.subject, transMail.templeate(item));
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