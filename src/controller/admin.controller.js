import { admin } from "./../services/index.service";
import { uploadFile } from "./../config/multerUpload";
import multer from "multer";
import fs from "fs-extra";
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFile.image_derectory);
  },
  filename: function (req, file, cb) {
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
}).single("avatar");
let getDataAdmin = async (req, res) => {
  let dataAdmin = await admin.getDataAdmin();
  res.json({ result: true, data: dataAdmin });
};
let getDataAdminById = async (req, res) => {
  let { idAdmin } = req.params;
  let dataAdmin = await admin.getDataAdminById(idAdmin);
  res.json({ result: true, data: dataAdmin });
};
let createAdmin = async (req, res) => {
  upload(req, res, async (errUpload) => {
    if (errUpload) {
      console.log(errUpload);

      return res.status(500).send("Không đúng định dạng file");
    }
    try {
      let { username, password, avatar, position } = req.body;
      let item = {
        username,
        password,
        avatar: req.file.filename,
        position,
      };
      let createItem = await admin.createAdmin(item);
      res.json({ result: true, data: createItem });
    } catch (error) {
      res.json({ result: false, msgError: error });
    }
  });
};
let updateAdmin = async (req, res) => {
  upload(req, res, async (errUpload) => {
    if (errUpload) {
      console.log(errUpload);

      return res.status(500).send("Không đúng định dạng file");
    }
    try {
      let { idAdmin } = req.params;
      let { username, password, avatar, fullname } = req.body;
      let item = {
        username,
        password,
        avatar: req.file.filename,
        fullname,
      };
      let createItem = await admin.updateAdmin(idAdmin, item);
      res.json({ result: true, data: createItem });
    } catch (error) {
      res.json({ result: false, msgError: error });
    }
  });
};
let deleteAdmin = async (req, res) => {
  let { idAdmin } = req.params;
  let dataAdmin = await admin.deleteAdmin(idAdmin);
  //console.log(dataAdmin);

  await fs.remove(`${uploadFile.image_derectory}/${dataAdmin.avatar}`);
  res.json({ result: true, data: dataAdmin });
};
module.exports = {
  createAdmin: createAdmin,
  getDataAdminById: getDataAdminById,
  getDataAdmin: getDataAdmin,
  updateAdmin: updateAdmin,
  deleteAdmin: deleteAdmin,
};
