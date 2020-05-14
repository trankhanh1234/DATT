import { admin } from "./../services/index.service";
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
  try {
    let { username, password, avatar, position } = req.body;
    let item = {
      username,
      password,
      avatar,
      position,
    };
    let createItem = await admin.createAdmin(item);
    res.json({ result: true, data: createItem });
  } catch (error) {
    res.json({ result: false, msgError: error });
  }
};
let updateAdmin = async (req, res) => {
  try {
    let { idAdmin } = req.params;
    let { username, password, avatar, fullname } = req.body;
    let item = {
      username,
      password,
      avatar,
      fullname,
    };
    let createItem = await admin.updateAdmin(idAdmin, item);
    res.json({ result: true, data: createItem });
  } catch (error) {
    res.json({ result: false, msgError: error });
  }
};
let deleteAdmin = async (req, res) => {
  let { idAdmin } = req.params;
  let dataAdmin = await admin.deleteAdmin(idAdmin);
  res.json({ result: true, data: dataAdmin });
};
module.exports = {
  createAdmin: createAdmin,
  getDataAdminById: getDataAdminById,
  getDataAdmin: getDataAdmin,
  updateAdmin: updateAdmin,
  deleteAdmin: deleteAdmin,
};
