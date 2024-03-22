// orderService.js

import { fetchCollection } from "../mongodb/mongoDbClient.js";
import { ObjectId } from "mongodb";

const ORDER_COLLECTION_NAME = "orders";

// Lägg till fler fält om det behövs (som tid, datum, telefonnummer, e-post etc.)
const createOrder = async (username, date, time, phone, email, items, status) => {
  const order = { username, date, time, phone, email, items, status };
  const result = await fetchCollection(ORDER_COLLECTION_NAME).insertOne(order);
  return result;
};

const getAll = async () => {
  return await fetchCollection(ORDER_COLLECTION_NAME).find({}).toArray();
};

const getById = async (id) => {
    const _id = new ObjectId(id);
    return await fetchCollection(ORDER_COLLECTION_NAME).findOne({ _id });
  };

const update = async (id, status) => {
    const _id = new ObjectId(id);
    await fetchCollection(ORDER_COLLECTION_NAME).updateOne({ _id }, { $set: { status } });
    return { _id, status };
  };

const deleteOrder = async (id) => {
    const _id = new ObjectId(id);
    await fetchCollection(ORDER_COLLECTION_NAME).deleteOne({ _id });

};

const updateDeliveryStatus = async (id) => {
    const _id = new ObjectId(id);
    const status = "delivered";
    await fetchCollection(ORDER_COLLECTION_NAME).updateOne({ _id }, { $set: { status } });
    return { _id: id, status };
};

export default { createOrder, getAll, getById, update, deleteOrder, updateDeliveryStatus };