import galmodel from "../models/gallery.js";
import catmodel from "../models/category.js";

class gallcontrol {
    static upimage = async (req, res) => {
        const { category } = req.body;
        try {
            if (category) {
                const addimage = new galmodel({
                    name: req.file.filename,
                    category: category,
                });
                const saved_image = await addimage.save();
                if (saved_image) {
                    return res.status(200).json({ message: "File uploaded successfully" });
                }
            } else {
                return res.status(400).json({ message: "All fields are required" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

    static addNewCategory = async (req, res) => {
        const { name } = req.body;
        try {
            if (name) {
                const newcategory = new catmodel({
                    name: name,
                });
                const saved_category = await newcategory.save();
                if (saved_category) {
                    return res.status(200).json({ message: "Category added successfully" });
                }
            } else {
                return res.status(400).json({ message: "All fields are required" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

    static getAllCategories = async (req, res) => {
        try {
            const fetchall = await catmodel.find({});
            return res.status(200).json(fetchall);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

    static getAllImages = async (req, res) => {
        try {
            const fetchallimages = await galmodel.find({});
            return res.status(200).json(fetchallimages);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

    static getsingleImage = async (req, res) => {
        const { category } = req.query;
        try {
            if (category) {
                const basedimage = await galmodel.find({ category: category });
                return res.status(200).json(basedimage);
            } else {
                return res.status(400).json({ message: "All fields are required" });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

    static deleteCategory = async (req, res) => {
        const { id } = req.params;
        try {
            const deletedCategory = await catmodel.findByIdAndDelete(id);
            if (!deletedCategory) {
                return res.status(404).json({ message: "Category not found" });
            }
            return res.status(200).json({ message: "Category deleted successfully" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
}

export default gallcontrol;
