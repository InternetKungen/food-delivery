// orderRouter.js

import express from 'express';
import orderController from '../controller/orderController.js';
import jwtFilter from '../middleware/jwtFilter.js'

const router = express.Router();

/** Admin endpoints */
//GET /order - Lista på alla pågående ordrar 
router.get("/order", jwtFilter.authorize.bind({ role: "ADMIN" }), orderController.getAllOrders)


/** Customer endpoints */
router
//GET /order/:id - Hämta en specifik order 
  .get("/order/:id", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.getOrderById)

//POST /order - Skapa en ny order
  .post("/order", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.createOrder)

//PATCH /order/:id/item/:itemId - Uppdatera en order
  .patch("/order/:id/item/:itemId", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.updateOrder)


//DELETE /order/:id - Ta bort en pågående order
  .delete("/order/:id/item/:itemId", jwtFilter.authorize.bind({ role: "CUSTOMER" }), orderController.deleteOrder);


/** Provider endpoints */
router.patch("/order/:id", jwtFilter.authorize.bind({ role: "PROVIDER" }), orderController.updateOrderAsDelivered);

export default router;
