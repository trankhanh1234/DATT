import categoryModel from "./../models/category.model";
let getCategory = () =>{
    return new Promise( async(resolve, reject)=>{
        let dataCate = await categoryModel.getCategory();
        resolve(dataCate);
    })
}
let getCateById = (id) =>{
    return new Promise( async(resolve, reject)=>{
        let dataCate = await categoryModel.getCateById(id);
        resolve(dataCate);

    })
}
let createCategory = (item) =>{
    return new Promise( async(resolve, reject)=>{
        let findCate = await categoryModel.getCateByTitle(item.title); 
        if(findCate){
            return reject("Đã tồn tại")
        }
        let dataCate = await categoryModel.createCategory(item);
        resolve(dataCate);

    })
}
let updateCategory = (id,item) =>{
    return new Promise( async(resolve, reject)=>{
        let dataCate = await categoryModel.updateCategory(id,item);
        resolve(dataCate);
    })
}
let deleteCategory = (id) =>{
    return new Promise( async(resolve, reject)=>{
        let dataIdCate = await categoryModel.getCateById(id);
        if(!dataIdCate){
            return reject("Không tìm thấy")
        }
        let dataCate = await categoryModel.deleteCategory(id);
        resolve(dataCate);
    })
}
module.exports = {
    getCategory: getCategory,
    getCateById: getCateById,
    createCategory: createCategory,
    updateCategory:updateCategory,
    deleteCategory:deleteCategory
}