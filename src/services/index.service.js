import categoryService from "./category.service";
import productService from "./product.service";
import adminService from "./admin.service";
import providerService from "./provider.service";
module.exports = {
  cate: categoryService,
  product: productService,
  admin: adminService,
  provider: providerService,
};
