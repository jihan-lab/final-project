import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import multer from "multer"
import Product from "./models/productModels.js";
import cors from "cors";
import User from "./models/userAccount.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './../frontend/public/images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, flase);
    }
}

try {
    await db.authenticate();
    // await Product.sync();
    // await User.sync();
    console.log("Database connected...");
} catch (error) {
    console.log("Connection error: ", error);
}

app.use(multer({ storage: storage, fileFilter: fileFilter }).single('image'));

// app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'));