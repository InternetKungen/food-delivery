async function createProduct(data) {
    const resp = await sendData("http://127.0.0.1:3000/products", data);
  }