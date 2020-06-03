import express from "express";
let router = express.Router();
import { checkout } from "./../controller/index.controller";

let initRouterClient = (app) => {
    router.post("/checkout", checkout.addDataCart);
    app.use("/", router);
}
module.exports = initRouterClient;