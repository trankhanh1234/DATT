import { provider } from "./../services/index.service";
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
      avatar,
      phoneNumber,
      address,
      keyActive: keyActive,
    };
    console.log(item);

    let createItem = await provider.createProvider(item);
    res.json({ result: true, data: createItem });
  } catch (error) {
    console.log(error);

    res.json({ result: false, msgError: error });
  }
};

let updateProvider = async (req, res) => {
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
};
let deleteProvider = async (req, res) => {
  let { idProvider } = req.params;
  let dataProvider = await provider.deleteProvider(idProvider);
  res.json({ result: true, data: dataProvider });
};
module.exports = {
  createProvider: createProvider,
  getDataProviderById: getDataProviderById,
  getDataProvider: getDataProvider,
  updateProvider: updateProvider,
  deleteProvider: deleteProvider,
};
