const usernameField = document.querySelector('input[name=username-field]');
const passwordField = document.querySelector('input[name=password-field]');
const loginForm = document.querySelector('.login-form');

loginForm?.addEventListener('submit', async e => {
  e.preventDefault();

  const username = usernameField.value;
  const password = passwordField.value;

  const data = { username, password };

  const resp = await authenticate(data);

  if(resp.authenticated) {
    window.location.href = "items.html";
  }
});