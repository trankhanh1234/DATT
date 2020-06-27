import express from "express";
import {
    cate,
    product,
    admin,
    provider,
    checkout,
    blog
} from "./../controller/index.controller";
import auth from "./../controller/auth.controller";

let router = express.Router();

let routerAdmin = (app) => {
    router.get("/category", cate.getCategory);
    router.get("/category/:idCate", cate.getCateById);
    router.post("/category/create-cate", cate.createCategory);
    router.put("/category/edit-cate/:idCate", cate.updateCategory);
    router.delete("/category/delete-cate/:idCate", cate.deleteCategory);
    router.get("/product", product.getDataProduct);
    router.get("/product/:idProduct", product.getProductById);
    router.post("/product/create-product", product.createProduct);
    router.put("/product/edit-product/:idProduct", product.updateProduct);
    router.delete("/product/delete-product/:idProduct", product.deleteProduct);
    router.get("/blog", blog.getDataBlog);
    router.get("/blog/:idBlog", blog.getBlogById);
    router.post("/blog/create-blog", blog.createBlog);
    router.put("/blog/edit-blog/:idBlog", blog.updateBlog);
    router.delete("/blog/delete-blog/:idBlog", blog.deleteBlog);
    router.get("/admin", admin.getDataAdmin);
    router.get("/admin/:idAdmin", admin.getDataAdminById);
    router.post("/admin/create-admin", admin.createAdmin);
    router.put("/admin/update-admin/:idAdmin", admin.updateAdmin);
    router.delete("/admin/delete-admin/:idAdmin", admin.deleteAdmin);
    router.get("/provider", provider.getDataProvider);
    router.get("/provider/:idProvider", provider.getDataProviderById);
    router.post("/provider/create-provider", provider.createProvider);
    router.put("/provider/update-provider/:idProvider", provider.updateProvider);
    router.delete(
        "/provider/delete-provider/:idProvider",
        provider.deleteProvider
    );
    router.get("/checkout", checkout.getAllCart);
    router.get("/checkout/:idCart", checkout.getDataCartById)
    router.put("/checkout/edit-cart/:idCart")
    router.delete("/checkout/delete-cart/:idCart", checkout.deleteDataCart)
    app.use("/admin", router);
};
module.exports = routerAdmin;