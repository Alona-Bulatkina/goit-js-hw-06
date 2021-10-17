const inputRef = document.querySelector('#validation-input');
const datasetLength = parseInt(inputRef.dataset.length);
inputRef.addEventListener('change', event => {
  event.target.value.length === datasetLength
    ? event.target.classList.remove('invalid') &
      event.target.classList.add('valid')
    : event.target.classList.add('invalid');
});