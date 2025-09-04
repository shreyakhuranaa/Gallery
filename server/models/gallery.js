import mongoose from "mongoose";
const gall=new mongoose.Schema({
    name:{
        type:String,
    },
    category :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"category",
    }
});

const galmodel = mongoose.model("gallery",gall);
export default galmodel;