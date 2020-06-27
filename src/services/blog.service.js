import blogModel from "./../models/blog.model";

const LIMIT_DATA_PRODUCT = 1000;
let getDataBlog = (page) => {
    return new Promise(async(resolve, reject) => {
        let dataBlog = await blogModel.getAllDataBlog()
        resolve({ dataBlog });
    })
}
let getBlogById = (id) => {
    return new Promise(async(resolve, reject) => {
        let getBlogById = await blogModel.getBlogById(id);
        resolve(getBlogById);
    })
}
let createBlog = (item) => {
    return new Promise(async(resolve, reject) => {
        let getDataByTitle = await blogModel.getDataByTitle(item.title);
        if (getDataByTitle) {
            return reject(" Da Ton Tai");
        }
        let createBlog = await blogModel.createBlog(item);
        resolve(createBlog);
    })
}
let updateBlog = (id, item) => {
    return new Promise(async(resolve, reject) => {
        let updateBlog = await blogModel.updateBlog(id, item);
        resolve(updateBlog);
    })
}
let deleteBlog = (id) => {
    return new Promise(async(resolve, reject) => {
        let deleteBlog = await blogModel.deleteBlog(id);
        resolve(deleteBlog);
    })
}
module.exports = {
    getBlogById,
    createBlog,
    deleteBlog,
    updateBlog,
    getDataBlog
}