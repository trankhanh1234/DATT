import {product} from "./../services/index.service";
let getDataProduct = async(req,res) =>{
    let page = req.query.page || 1;
    let getDataProduct = await product.getDataProduct(page);
    res.json({result: true, getDataProduct: getDataProduct.dataProduct}); 
}
let getProductById = async(req,res) =>{
    let {idProduct} = req.params;
    let getProductById = await product.getProductById(idProduct);
    res.json({result: true, getProductById: getProductById}); 

}
let createProduct = async(req, res) =>{
    try {
            let {title, image, price, quality, description, idCate } = req.body;
            let item = {
                title,
                image,
                quality,
                description,
                price,
                idCate
            }
        let dataProduct = await product.createProduct(item);
        res.json({result: true, dataProduct: dataProduct}); 
    } catch (error) {
        res.status(400).send(error);
    }
}
let updateProduct = async(req,res)=>{
    try {
        let {idProduct} = req.params;
        console.log(idProduct);
        
        let {title, image, price, quality, description, idCate } = req.body;
        let item = {
            title,
            image,
            quality,
            description,
            price,
            idCate
        }
        let dataProduct = await product.updateProduct(idProduct,item);
        res.json({result: true, dataProduct: dataProduct}); 
    } catch (error) {
        res.status(400).send(error);
    }
}
let deleteProduct = async(req,res)=>{
    try {
        let {idProduct} = req.params;
        let dataProduct = await product.deleteProduct(idProduct);
        res.json({result: true, dataProduct: dataProduct}); 
    } catch (error) {
        res.json({result: flase, error: error}); 
    }
}
module.exports  = {
    getDataProduct:getDataProduct,
    getProductById:getProductById,
    createProduct: createProduct,
    updateProduct:updateProduct,
    deleteProduct:deleteProduct,
}