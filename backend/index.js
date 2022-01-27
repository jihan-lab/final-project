import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import Product from "./models/productModels.js";
import cors from "cors";
import User from "./models/userAccount.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();

try {
    await db.authenticate();
    // await Product.sync();
    // await User.sync();
    console.log("Database connected...");
} catch (error) {
    console.log("Connection error: ", error);
}

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'));