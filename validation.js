const form = document.querySelector('.form');
const email = document.querySelector('#email-field');
const error = email.nextElementSibling;
const nameInput = document.querySelector('#full-name');
const isValid = (email) => !/([A-Z])/g.test(email);

// Local Storage
const savedData = {};
const save = () => {
  savedData.name = nameInput.value;
  savedData.email = email.value;
  localStorage.setItem('savedData', JSON.stringify(savedData));
};
const retrieve = () => {
  const retrieveData = JSON.parse(localStorage.getItem('savedData'));
  nameInput.value = retrieveData.name;
  email.value = retrieveData.email;
};

form.addEventListener('submit', (event) => {
  if (!isValid(email.value)) {
    event.preventDefault();
    error.textContent = 'I expect only lowercase my dear!';
    error.className = 'error active';
  } else {
    form.submit();
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
    save();
  }
});

window.addEventListener('load', () => {
  retrieve();
});