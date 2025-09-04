import express from "express";
import multer from "multer";
import path from "path";
import gallcontrol from "../controllers/gallcontrol.js";

const rout = express.Router();

// Set up storage configuration for multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/upload/');
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

// Route for uploading image
rout.post(
    "/upload/image",
    upload.single("image"),
    gallcontrol.upimage
);

// Other routes
rout.post("/add/category", gallcontrol.addNewCategory);
rout.get("/get/categories", gallcontrol.getAllCategories);
rout.get("/get/images", gallcontrol.getAllImages);
rout.get("/get/singleimage", gallcontrol.getsingleImage);
rout.delete('/delete/category/:id', gallcontrol.deleteCategory);
export default rout;


