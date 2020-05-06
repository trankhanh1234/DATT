import {cate} from "./../services/index.service";
let getCategory = async (req,res) =>{
    let dataCate = await cate.getCategory();
    return res.json({result: true, dataCate: dataCate});
}
let getCateById = async (req,res) =>{
    let {idCate} = req.params;
    let dataCate = await cate.getCateById(idCate);
    return res.json({result: true, dataCate: dataCate});
}
let createCategory = async(req,res) =>{
    try {
        let {title} = req.body;
        let item = {
            title,
        }        
        let dataCate = await cate.createCategory(item);
        return res.json({result: true, dataCate: dataCate});
    } catch (error) {
        return res.json({result: false, error: error});
    }

}
let updateCategory = async(req,res) =>{
    try {
        let {idCate} = req.params;
        let {title} = req.body;
        let item = {
            title,
            updatedAt: Date.now()
        }        
        let dataCate = await cate.updateCategory(idCate,item);
        return res.json({result: true, dataCate: dataCate});
    } catch (error) {
        return res.json({result: false, msgErr: error});
    }

}
let deleteCategory = async(req,res) =>{
    try {
        let {idCate} = req.params;     
        let dataCate = await cate.deleteCategory(idCate);
        return res.json({result: true, dataCate: dataCate});
    } catch (error) {
        return res.json({result: false, msgErr: error});
    }

}

module.exports ={
    getCategory:  getCategory,
    getCateById: getCateById,
    createCategory : createCategory,
    updateCategory : updateCategory,
    deleteCategory:deleteCategory,
}