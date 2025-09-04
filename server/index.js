import express from "express";
import conn from "./config/db.js";
import cors from "cors";
import galleryRoutes from "./routes/gallery.js";
const app = express();


//API routes
app.use(cors());
//middleware
app.use(express.json());

app.use("/api/v1",galleryRoutes);
app.use(express.static("public/upload"));

const PORT = 8000;

conn();

app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
