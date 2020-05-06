import express from "express"
import bodyParser from "body-parser"
import configDB from "./config/configDb"
import routerAdmin from "./router/admin.router.js";
let app = express();
configDB();
app.use(bodyParser.urlencoded({ extended: true }))
routerAdmin(app);
require("dotenv").config();
app.listen(process.env.PORT, () => {
    console.log(`Hello ${process.env.HOST}:${process.env.PORT}`);

});
