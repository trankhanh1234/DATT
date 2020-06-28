import { product } from "./../services/index.service";
import { uploadFile } from "./../config/multerUpload";
import multer from "multer";
import fs from "fs-extra";
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadFile.image_derectory);
    },
    filename: function(req, file, cb) {
        let typeMatch = uploadFile.image_type;
        if (typeMatch.indexOf(file.mimetype) === -1) {
            return cb("Không đúng định dạng file", null);
        }
        let imageName = `${Date.now()}-${file.originalname}`;
        cb(null, imageName);
    },
});
let upload = multer({
    storage: storage,
}).single("image");
let getDataProduct = async(req, res) => {
    let page = req.query.page || 1;
    let getDataProduct = await product.getDataProduct(page);
    res.json({ result: true, getDataProduct: getDataProduct.dataProduct });
};
let getProductById = async(req, res) => {
    let { idProduct } = req.params;
    let getProductById = await product.getProductById(idProduct);
    res.json({ result: true, getProductById: getProductById });
};
let createProduct = (req, res) => {
    upload(req, res, async(errUpload) => {
        if (errUpload) {
            console.log(errUpload);

            return res.status(500).send("Không đúng định dạng file");
        }
        try {
            let { title, price, salePrice, quality, description, idCate } = req.body;
            let item = {
                title,
                image: req.file.filename,
                quality,
                description,
                price,
                salePrice,
                idCate,
            };
            let dataProduct = await product.createProduct(item);
            res.json({ result: true, data: createItem });
        } catch (error) {
            res.json({ result: false, msgError: error });
        }
    });
};
let updateProduct = async(req, res) => {
    upload(req, res, async(errUpload) => {
        if (errUpload) {
            if (errUpload.message)
                return res.status(500).send("Kích thước file không được quá 1 MB");
            return res.status(500).send("Không đúng định dạng file");
        }
        try {
            let { idProduct } = req.params;
            let getProductById = await product.getProductById(idProduct);
            console.log(req.body);

            console.log(idProduct);
            let { title, imageOld, price, salePrice, quality, description, idCate } = req.body;
            let imageProduct = imageOld;

            if (typeof req.file !== "undefined") {
                imageProduct = req.file.filename
                console.log(getProductById.image);

                await fs.remove(`${uploadFile.image_derectory}/${getProductById.image}`);
            }

            let item = {
                title,
                image: imageProduct,
                quality,
                description,
                price,
                salePrice,
                idCate,
            };

            let dataProduct = await product.updateProduct(idProduct, item);
            res.json({ result: true, dataProduct: dataProduct });
        } catch (error) {
            console.log(error);

            res.status(400).send(error);
        }
    });
};
let deleteProduct = async(req, res) => {
    try {
        let { idProduct } = req.params;
        let dataProduct = await product.deleteProduct(idProduct);
        console.log(dataProduct);

        await fs.remove(`${uploadFile.image_derectory}/${dataProduct.image}`);
        res.json({ result: true, dataProduct: dataProduct });
    } catch (error) {
        console.log(error);

        res.json({ result: flase, error: error });
    }
};
module.exports = {
    getDataProduct: getDataProduct,
    getProductById: getProductById,
    createProduct: createProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
};