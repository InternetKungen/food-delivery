//orderController.js

import orderService from "../service/orderService.js";
import jwtUtils from "../util/jwtUtils.js";

/** Admin controller*/
//GET /order - Lista på alla pågående ordrar 
const getAllOrders = async (req, resp) => {

  const orders = await orderService.getAll();

  if(orders.length == 0) {
    return resp.status(204).send({msg: "Order is empty"});
  }

  resp.send(await orderService.getAll());
};

/** Customer controller*/
//GET /order/:id - Hämta en specifik order 
const getOrderById = async (req, resp) => {
  const { username } = resp.locals.token;
  
  resp.send(await orderService.get(username));
}

//POST /order - Skapa en ny order
const createOrder = (req, resp) => {
  const {name, quantity} = req.body;
  const { username } = resp.locals.token;

  if(name == undefined || quantity == undefined) {
    return resp.status(400).send({err: "Missing parameters name or quantity"});
  } else if(!req.params.id.match("[0-9]*")) {
    return resp.status(400).send({err: "Id number is malformed"}); // TODO: change this to middlware
  }

  orderService.add(username, {name, quantity});

  resp.status(201).send({msg: "Item was added"});
}

//DELETE /order/:id/item/:itemId - Ta bort en pågående order
const deleteItem = async (req, resp) => {
  await orderService.deleteItem(req.params.id, req.params.itemId);

  resp.status(200).send({msg: "success"});
}

//PATCH /order/:id - Uppdatera en order med :id, ex. ny leveranstid,
const updateOrder = (req, resp) => {
  resp.send("Not implemented yet");
}


/** Provider Controller*/
//PATCH /order/:id - Uppdatera en order som levererad
const updateOrderAsDelivered = (req, resp) => {
    resp.send("Not implemented yet");
  }

export default { getAllOrders, getOrderById, createOrder, deleteItem, updateOrder, updateOrderAsDelivered }