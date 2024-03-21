// orderRouter.js

import express from 'express';
import orderController from '../controller/orderController.js';
import jwtFilter from '../middleware/jwtFilter.js';

const router = express.Router();

// GET /orders - Lista på alla pågående ordrar
router.get("/orders", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.getAllOrders);

// GET /orders/:id - Hämta en specifik order
router.get("/orders/:id", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.getOrderById);

// POST /orders - Skapa en ny order
router.post("/orders", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.createOrder);

// PATCH /orders/:id - Uppdatera en order med :id
router.patch("/orders/:id", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.updateOrder);

// DELETE /orders/:id - Ta bort en pågående order
router.delete("/orders/:id", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.deleteOrder);

// PATCH /orders/:id/delivered - Uppdatera en order som levererad (endast för leverantör)
router.patch("/orders/:id/delivered", jwtFilter.authorize.bind({ role: "PROVIDER" }), orderController.updateOrderAsDelivered);

export default router;