import express from "express";


import {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
} from "../controllers/Products.js";

import { 
    createAccount, 
    getAllUser, 
    loginAccount, 
    refresh,
    verify_token, 
} from "../controllers/User.js";

const router = express.Router();

router.get('/getallproduct', getAllProducts);
router.get('/getproduct/:id', getProductById);
router.post('/createproduct', createProduct);
router.delete('/delete/:id', deleteProduct);
router.put('/update/:id', updateProduct);

router.get('/getalluser/:id',verify_token, getAllUser);
router.post('/createaccount',createAccount);
router.post('/login',loginAccount)

router.get("/api/token", refresh);

export default router;