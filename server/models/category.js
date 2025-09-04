import mongoose from "mongoose";
const cat=new mongoose.Schema({
    name:{
        type:String,
    },
});

const catmodel = mongoose.model("category",cat);
export default catmodel;