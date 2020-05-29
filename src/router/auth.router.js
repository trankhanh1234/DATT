import auth from "./../controller/auth.controller";
import express from "express";
let router = express.Router();
let routerAuth = (app) => {
  router.post("/loginAdmin", auth.loginAdmin);
  app.use("/auth/", router);
};

module.exports = routerAuth;
