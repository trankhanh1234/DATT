import categoryService from "./category.service";
import productService from "./product.service";
import adminService from "./admin.service";
import providerService from "./provider.service";
import checkoutService from "./checkout.service"
import blogService from "./blog.service";
module.exports = {
    cate: categoryService,
    product: productService,
    admin: adminService,
    provider: providerService,
    checkout: checkoutService,
    blog: blogService
};