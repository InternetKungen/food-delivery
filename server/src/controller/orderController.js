// orderController.js

import orderService from "../service/orderService.js";
import jwtUtils from "../util/jwtUtils.js";

// GET /orders - Lista på alla pågående ordrar
const getAllOrders = async (req, res) => {
  const orders = await orderService.getAll();
  res.send(orders);
};

// GET /orders/:id - Hämta en specifik order
const getOrderById = async (req, res) => {
  const order = await orderService.getById(req.params.id);
  res.send(order);
};

// POST /orders - Skapa en ny order
const createOrder = async (req, res) => {
  const { date, time, phone, email, items, status } = req.body;
  const { username } = res.locals.token;
  const newOrder = await orderService.createOrder(username, date, time, phone, email, items, status);
  res.status(201).send(newOrder);
};

// PATCH /orders/:id - Uppdatera en order med :id
const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedOrder = await orderService.update(id, status);
  res.send(updatedOrder);
};

// DELETE /orders/:id - Ta bort en pågående order
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  await orderService.deleteOrder(id);
  res.status(200).send({ msg: "Order deleted successfully" });
};

// PATCH /orders/:id/delivered - Uppdatera en order som levererad
const updateOrderAsDelivered = async (req, res) => {
  const { id } = req.params;
  const updatedOrder = await orderService.updateDeliveryStatus(id);
  res.send(updatedOrder);
};

export default { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder, updateOrderAsDelivered };
