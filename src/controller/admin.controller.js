import { admin } from "./../services/index.service";
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
    res.json({ result: false, msgError: errors });
  }
};
module.exports = {
  createAdmin: createAdmin,
};
