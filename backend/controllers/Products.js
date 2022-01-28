import Product from "../models/productModels.js";
import multer from "multer";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        const filePath = `/images/${req.file.filename}`
        await Product.create({
            name: req.body.name,
            rentangHarga: req.body.rentangHarga,
            description: req.body.description,
            image: filePath
        })
        res.json({
            "message": "Product created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }

}