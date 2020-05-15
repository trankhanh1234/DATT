import providerModel from "./../models/provider.model";
import bcryptjs from "bcryptjs";

var salt = bcryptjs.genSaltSync(10);
let getDataProvider = () => {
  return new Promise(async (resolve, reject) => {
    let getDataProvider = await providerModel.getDataProvider();
    resolve(getDataProvider);
  });
};
let getDataProviderById = (idProvider) => {
  return new Promise(async (resolve, reject) => {
    let getDataProvider = await providerModel.getDataProviderById(idProvider);
    resolve(getDataProvider);
  });
};
let createProvider = (item) => {
  return new Promise(async (resolve, reject) => {
    try {
      let getDataProviderByUsername = await providerModel.getDataProviderByUsername(
        item.username
      );
      if (getDataProviderByUsername) {
        return reject("Da Ton Tai");
      }
      item.fullname = item.username.split("@")[0];
      item.password = bcryptjs.hashSync(item.password, salt);
      let createProvider = await providerModel.createProvider(item);
      resolve(createProvider);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
let updateProvider = (idProvider, item) => {
  return new Promise(async (resolve, reject) => {
    item.password = bcryptjs.hashSync(item.password, salt);
    let createProvider = await providerModel.updateProvider(idProvider, item);
    resolve(createProvider);
  });
};
let deleteProvider = (idProvider) => {
  return new Promise(async (resolve, reject) => {
    let getDataProvider = await providerModel.deleteProvider(idProvider);
    resolve(getDataProvider);
  });
};
module.exports = {
  createProvider: createProvider,
  getDataProvider: getDataProvider,
  getDataProviderById: getDataProviderById,
  updateProvider: updateProvider,
  deleteProvider: deleteProvider,
};
