//orderService.js

import { fetchCollection } from "../mongodb/mongoDbClient.js";

const ORDER_COLLECTION_NAME = "orders";

const orders = []

const getAll = async () => {
  return await fetchCollection(ORDER_COLLECTION_NAME).find({}, {_id: 0}).toArray(); // TODO: Projection _id: 0 does not work to prevent _id from showing
}

const get = async username => {
  return await fetchCollection(ORDER_COLLECTION_NAME).findOne({username});
}

const deleteOrder = (username) => {
  fetchCollection(ORDER_COLLECTION_NAME).deleteOne({username});
}

const deleteItem = async (username, itemId) => {
  const order = await get(username);

  order.items.splice(itemId, 1);

  const result = await fetchCollection(ORDER_COLLECTION_NAME).updateOne({username}, { $set: {items: order.items}});
}

const add = async (username, {name, quantity}) => {
  const items = {name, quantity};

  const result = await fetchCollection(ORDER_COLLECTION_NAME).updateOne({username}, { $push: { items }}, { upsert: true });

  return result.upsertedCount == 1 || result.modifiedCount == 1;
}


export default { getAll, get, add, deleteOrder, deleteItem }