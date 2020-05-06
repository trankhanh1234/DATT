import express from "express"
import bodyParser from "body-parser"
let app = express();
app.use(bodyParser.urlencoded({ extended: true }))
require("dotenv").config()
app.listen(process.env.PORT, () => {
    console.log(`Hello ${process.env.HOST}:${process.env.PORT}`);

});
app.get("/", (req, res) => {
    res.send("Hihi")
})