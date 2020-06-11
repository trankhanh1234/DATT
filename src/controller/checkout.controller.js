import { checkout } from "./../services/index.service"

let addDataCart = async(req, res) => {
    try {
        let addDataCart = JSON.parse(req.body.dataCart);
        let totalPrice = 0;
        let totalQty = 0;
        let arrItemCart = [];
        for (let i = 0; i < addDataCart.length; i++) {
            let item = {
                idItem: addDataCart[i].item._id,
                title: addDataCart[i].item.title,
                soluong: addDataCart[i].soluong,
                totalPriceItem: addDataCart[i].soluong * addDataCart[i].item.price,
            }
            arrItemCart.push(item);
            totalQty += addDataCart[i].soluong
            totalPrice += addDataCart[i].soluong * addDataCart[i].item.price;
        }
        let { name, email, phone, address } = req.body;
        let item = {
            username: name,
            email: email,
            phoneNumber: phone,
            address: address,
            listCart: arrItemCart,
            totalQty: totalQty,
            totalPrice: totalPrice
        }
        await checkout.addDataToCart(item)
        res.json({ result: true, ssMgs: "Dat hang thanh cong" });
    } catch (error) {
        console.log(error);

        res.json({ result: false, ssMgs: "Dat hang that bai" });
    }
}
module.exports = {
    addDataCart
}