// productService.js

import { fetchCollection } from "../mongodb/mongoDbClient.js";
import { ObjectId } from "mongodb";

const PRODUCT_COLLECTION_NAME = "products";

const createProduct = async (name, price, type, image) => {
  const product = { name, price, type, image };
  const result = await fetchCollection(PRODUCT_COLLECTION_NAME).insertOne(product);
  return result;
};

const getAll = async () => {
  return await fetchCollection(PRODUCT_COLLECTION_NAME).find({}).toArray();
};

const getById = async (id) => {
    const _id = new ObjectId(id);
    return await fetchCollection(PRODUCT_COLLECTION_NAME).findOne({ _id });
  };

const update = async (id, status) => {
    const _id = new ObjectId(id);
    await fetchCollection(PRODUCT_COLLECTION_NAME).updateOne({ _id }, { $set: { status } });
    return { _id, status };
  };

const deleteProduct = async (id) => {
    const _id = new ObjectId(id);
    await fetchCollection(PRODUCT_COLLECTION_NAME).deleteOne({ _id });

};

export default { createProduct, getAll, getById, update, deleteProduct };