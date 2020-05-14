import adminModel from "./../models/admin.models";
import brciyptjs from "bcryptjs";

let createAdmin = (item) => {
  return new Promise((resolve, reject) => {
    console.log(item);
  });
};
module.exports = {
  createAdmin: createAdmin,
};
