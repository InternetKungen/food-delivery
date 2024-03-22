// productController.js

import productService from "../service/productService.js";
import jwtUtils from "../util/jwtUtils.js";

// GET /products - Lista på alla pågående ordrar
const getAllProducts = async (req, res) => {
  const products = await productService.getAll();
  res.send(products);
};

// GET /products/:id - Hämta en specifik product
const getProductById = async (req, res) => {
  const product = await productService.getById(req.params.id);
  res.send(product);
};

// POST /products - Skapa en ny produkt
const createProduct = async (req, res) => {
  const { name, price, type, image } = req.body;
  const newProduct = await productService.createProduct(name, price, type, image);
  res.status(201).send(newProduct);
};

// PATCH /products/:id - Uppdatera en product med :id
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const updatedProduct = await productService.update(id, status);
  res.send(updatedProduct);
};

// DELETE /products/:id - Ta bort en pågående product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productService.deleteProduct(id);
  res.status(200).send({ msg: "Product deleted successfully" });
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
