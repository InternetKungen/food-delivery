const nameField = document.querySelector('input[name=name-field]');
const priceField = document.querySelector('input[name=price-field]');
const typeField = document.querySelector('select[name=type-field]');
const imageField = document.querySelector('input[name=image-field]');
const addProductForm = document.querySelector('.add-product-form');

addProductForm?.addEventListener('submit', async e => {
  e.preventDefault();

  const name = usernameField.value;
  const price = passwordField.value;
  const type = typeField.value;
  const image = imageField.value;

  const data = { name, price, type, image };
  console.log(data);

  const resp = await createProduct(data);

    window.location.href = "index.html";
});