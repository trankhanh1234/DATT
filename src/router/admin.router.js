import express from "express";
import {cate} from "./../controller/index.controller";
let router = express.Router();
    
let routerAdmin = (app)=>{
    router.get("/category", cate.getCategory);
    router.get("/category/:idCate", cate.getCateById);
    router.post("/category/create-cate", cate.createCategory);
    router.put("/category/edit-cate/:idCate", cate.updateCategory);
    router.delete("/category/delete-cate/:idCate", cate.deleteCategory)
    app.use("/admin", router)
}
module.exports =  routerAdmin;