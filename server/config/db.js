import mongoose from "mongoose";
const conn = async () =>{
    const res= await mongoose.connect("mongodb://localhost:27017/mern-gallery-app");
    if(res){
        console.log("connected succesfully");
    }

};
export default conn;