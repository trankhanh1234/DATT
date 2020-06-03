import express from "express";
import bodyParser from "body-parser";
import configDB from "./config/configDb";
import routerAdmin from "./router/admin.router.js";
import routerAuth from "./router/auth.router";
import initRouterClient from "./router/client.router";
let app = express();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});
configDB();
app.use(bodyParser.urlencoded({ extended: true }));
routerAdmin(app);
routerAuth(app);
initRouterClient(app)
require("dotenv").config();
app.listen(process.env.PORT, () => {
    console.log(`Hello ${process.env.HOST}:${process.env.PORT}`);
});