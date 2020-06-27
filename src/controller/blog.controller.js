import { blog } from "./../services/index.service";
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
let getDataBlog = async(req, res) => {
    let getDataBlog = await blog.getDataBlog();
    res.json({ result: true, getDataBlog: getDataBlog });
};
let getBlogById = async(req, res) => {
    let { idBlog } = req.params;
    let getBlogById = await blog.getBlogById(idBlog);
    res.json({ result: true, getBlogById: getBlogById });
};
let createBlog = (req, res) => {
    upload(req, res, async(errUpload) => {
        if (errUpload) {
            console.log(errUpload);
            return res.json({ result: false, errMgs: errUpload });
        }
        try {
            let { title, description } = req.body;
            let item = {
                title,
                image: req.file.filename,

                description,

            };
            let dataBlog = await blog.createBlog(item);
            res.json({ result: true, dataBlog: dataBlog });
        } catch (error) {
            res.json({ result: false, errMgs: error })
        }
    });
};
let updateBlog = async(req, res) => {
    upload(req, res, async(errUpload) => {
        if (errUpload) {
            return res.json({ result: false, errMgs: errUpload })
        }
        try {
            let { idBlog } = req.params;
            let getBlogById = await blog.getBlogById(idBlog);
            let { title, imageOld, description } = req.body;
            let imageBlog = imageOld;
            if (typeof req.file !== "undefined") {
                imageBlog = req.file.filename
                await fs.remove(`${uploadFile.image_derectory}/${getBlogById.image}`);
            }
            let item = {
                title,
                image: imageBlog,
                description,
            };

            let dataBlog = await blog.updateBlog(idBlog, item);
            res.json({ result: true, dataBlog: dataBlog });
        } catch (error) {

            res.status(400).send(error);
        }
    });
};
let deleteBlog = async(req, res) => {
    try {
        let { idBlog } = req.params;
        let dataBlog = await blog.deleteBlog(idBlog);
        await fs.remove(`${uploadFile.image_derectory}/${dataBlog.image}`);
        res.json({ result: true, dataBlog: dataBlog });
    } catch (error) {
        console.log(error);

        res.json({ result: flase, error: error });
    }
};
module.exports = {
    getDataBlog,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};