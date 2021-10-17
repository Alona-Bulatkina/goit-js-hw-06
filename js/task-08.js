const form = document.querySelector('.login-form');
function onLoginFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    alert('все поля должны быть заполнены.');
    return;
  }
  const dataFormResult = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    dataFormResult[name] = value;
  });

  console.log(dataFormResult);
  form.reset();
}
form.addEventListener('submit', onLoginFormSubmit);