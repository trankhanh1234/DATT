import mongoose from "mongoose";
import blurbird from "bluebird";
require("dotenv").config();

let configDB = ()=>{
    mongoose.Promise = blurbird;
    let URL = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    return mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false});
}
module.exports = configDB;