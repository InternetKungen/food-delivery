const usernameField = document.querySelector('input[name=username-field]');
const passwordField = document.querySelector('input[name=password-field]');
const registrationForm = document.querySelector('.registration-form');

registrationForm?.addEventListener('submit', async e => {
  e.preventDefault();

  const username = usernameField.value;
  const password = passwordField.value;

  const data = { username, password };

  const resp = await register(data);

    window.location.href = "index.html";
});