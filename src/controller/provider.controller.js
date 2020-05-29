import { provider } from "./../services/index.service";
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
let activeAcount = function (numberKey) {
  return new Promise((resolve, reject) => {
    let arrValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e"];
    let valueKey = "";
    for (let i = 0; i <= numberKey; i++) {
      let data = Math.floor(Math.random() * arrValue.length);
      valueKey += arrValue[data];
    }
    resolve(valueKey);
  });
};
let getDataProvider = async (req, res) => {
  let ramdomValue = await activeAcount(6);
  console.log(ramdomValue);
  let dataProvider = await provider.getDataProvider();
  res.json({ result: true, data: dataProvider });
};
let getDataProviderById = async (req, res) => {
  let { idProvider } = req.params;
  let dataProvider = await provider.getDataProviderById(idProvider);
  res.json({ result: true, data: dataProvider });
};
let createProvider = async (req, res) => {
  upload(req, res, async (errUpload) => {
    if (errUpload) {
      console.log(errUpload);

      return res.status(500).send("Không đúng định dạng file");
    }
    let keyActive = await activeAcount(7);
    try {
      let {
        username,
        password,
        fullname,
        avatar,
        phoneNumber,
        address,
      } = req.body;
      let item = {
        username,
        password,
        fullname,
        avatar: req.file.finename,
        phoneNumber,
        address,
        keyActive: keyActive,
      };
      let createItem = await provider.createProvider(item);
      res.json({ result: true, data: createItem });
    } catch (error) {
      console.log(error);

      res.json({ result: false, msgError: error });
    }
  });
};

let updateProvider = async (req, res) => {
  upload(req, res, async (errUpload) => {
    if (errUpload) {
      console.log(errUpload);

      return res.status(500).send("Không đúng định dạng file");
    }
    try {
      let { idProvider } = req.params;
      let {
        username,
        password,
        fullname,
        avatar,
        phoneNumber,
        address,
        keyActive,
      } = req.body;
      let item = {
        username,
        password,
        avatar,
        fullname,
        phoneNumber,
        address,
        keyActive,
      };
      let createItem = await provider.updateProvider(idProvider, item);
      res.json({ result: true, data: createItem });
    } catch (error) {
      res.json({ result: false, msgError: error });
    }
  });
};
let deleteProvider = async (req, res) => {
  let { idProvider } = req.params;
  let dataProvider = await provider.deleteProvider(idProvider);
  await fs.remove(`${uploadFile.image_derectory}/${dataProvider.image}`);
  res.json({ result: true, data: dataProvider });
};
module.exports = {
  createProvider: createProvider,
  getDataProviderById: getDataProviderById,
  getDataProvider: getDataProvider,
  updateProvider: updateProvider,
  deleteProvider: deleteProvider,
};
