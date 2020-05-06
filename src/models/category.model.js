import mongoose from "mongoose";
let categorySchema = mongoose.Schema({
    title: String,
    createdAt:{type: Number,default: Date.now},
    updatedAt:{type: Number,default: null}
});
categorySchema.statics = {
    getCategory(){
        return this.find().sort({createdAt: -1}).exec();
    },
    getCateById(id){
        return this.findById(id);
    },
    getCateByTitle(item){
        return this.findOne({title:  item});
    },
    createCategory(item){
        return this.create(item);
    },
    updateCategory(id,item){
        return this.findByIdAndUpdate(id,item).exec();
    },
    deleteCategory(id){
        return this.findByIdAndDelete(id).exec();
    }
}

module.exports = mongoose.model("category",categorySchema);