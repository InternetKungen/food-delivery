// productRouter.js

import express from 'express';
import productController from '../controller/productController.js';
import jwtFilter from '../middleware/jwtFilter.js';

const router = express.Router();

// GET /products - Lista på alla befintliga produkter
router.get("/products", jwtFilter.authorize.bind({ role: "CUSTOMER" }), productController.getAllProducts);

// GET /products/:id - Hämta en specifik produkt
router.get("/products/:id", jwtFilter.authorize.bind({ role: "CUSTOMER" }), productController.getProductById);

// POST /products - Skapa en ny produkt
router.post("/products", jwtFilter.authorize.bind({ role: "CUSTOMER" }), productController.createProduct);

// // PATCH /products/:id - Uppdatera en produkt med :id
// router.patch("/products/:id", jwtFilter.authorize.bind({ role: "CUSTOMER" }), productController.updateProduct);

// DELETE /products/:id - Ta bort en pågående produkt
router.delete("/products/:id", jwtFilter.authorize.bind({ role: "CUSTOMER" }), productController.deleteProduct);

export default router;