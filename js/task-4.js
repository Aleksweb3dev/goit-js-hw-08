const form = document.querySelector('.login-form');
form.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const userData = {
    email,
    password,
  };

  console.log(userData);
  event.currentTarget.reset();
}
