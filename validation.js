const form = document.querySelector('form');
const email = document.querySelector('#email-field');
const error = email.nextElementSibling;

const emailRegExp = /^[a-z0-9.@]+$/g;

window.addEventListener('load', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid
    ? 'valid' : 'invalid';
});

email.addEventListener('input', () => {
  const isValid = email.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  } else {
    email.className = 'invalid';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = 'invalid';
    error.textContent = 'I expect only lowercase my dear!';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  }
});