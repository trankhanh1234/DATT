import adminModel from "./../models/admin.model";
import bcryptjs from "bcryptjs";

var salt = bcryptjs.genSaltSync(10);
let getDataAdmin = () => {
  return new Promise(async (resolve, reject) => {
    let getDataAdmin = await adminModel.getDataAdmin();
    resolve(getDataAdmin);
  });
};

let getDataAdminById = (idAdmin) => {
  return new Promise(async (resolve, reject) => {
    let getDataAdmin = await adminModel.getDataAdminById(idAdmin);
    resolve(getDataAdmin);
  });
};
let createAdmin = (item) => {
  return new Promise(async (resolve, reject) => {
    let getDataAdminByUsername = await adminModel.getDataAdminByUsername(
      item.username
    );
    if (getDataAdminByUsername) {
      return reject("Da Ton Tai");
    }
    item.fullname = item.username.split("@")[0];
    item.password = bcryptjs.hashSync(item.password, salt);
    let createAdmin = await adminModel.createAdmin(item);
    resolve(createAdmin);
  });
};
let updateAdmin = (idAdmin, item) => {
  return new Promise(async (resolve, reject) => {
    item.password = bcryptjs.hashSync(item.password, salt);
    let createAdmin = await adminModel.updateAdmin(idAdmin, item);
    resolve(createAdmin);
  });
};
let deleteAdmin = (idAdmin) => {
  return new Promise(async (resolve, reject) => {
    let getDataAdmin = await adminModel.deleteAdmin(idAdmin);
    resolve(getDataAdmin);
  });
};
module.exports = {
  createAdmin: createAdmin,
  getDataAdmin: getDataAdmin,
  getDataAdminById: getDataAdminById,
  updateAdmin: updateAdmin,
  deleteAdmin: deleteAdmin,
};
