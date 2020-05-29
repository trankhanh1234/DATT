import express from "express";
import {
  cate,
  product,
  admin,
  provider,
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
  app.use("/admin", auth.checkToken, router);
};
module.exports = routerAdmin;
