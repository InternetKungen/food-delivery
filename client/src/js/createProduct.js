const nameField = document.querySelector('input[name=name-field]');
const priceField = document.querySelector('input[name=price-field]');
const typeField = document.querySelector('select[name=type-field]');
const imageField = document.querySelector('input[name=image-field]');
const createProductForm = document.querySelector('.create-product-form');

createProductForm?.addEventListener('submit', async e => {
  e.preventDefault();

  const name = nameField.value;
  const price = priceField.value;
  const type = typeField.value;
  const image = imageField.value;

  const data = { name, price, type, image };
  console.log(data);

  const resp = await createProduct(data);
    console.log(resp);
    window.location.href = "products.html";
});