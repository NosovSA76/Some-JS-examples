var throttle = require('lodash.throttle');

const fidbackForm = document.querySelector('.feedback-form');

fidbackForm.addEventListener('input', throttle(onInputData, 500));
fidbackForm.addEventListener('submit', onFormSubmit);
reloadPage();


function onInputData(event) {
  const email = document.querySelector('input').value;
  const message = document.querySelector('textarea').value;
  const feedbackFormState = {
  email,
  message
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}

function reloadPage() {
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    const reloadForm = JSON.parse(localStorage.getItem('feedback-form-state'))
    document.querySelector('input').value = reloadForm.email;
    document.querySelector('textarea').value = reloadForm.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    const controlForm = JSON.parse(localStorage.getItem('feedback-form-state'))
    if (controlForm.email ){
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.currentTarget.reset();
      localStorage.removeItem('feedback-form-state')
    }
    else{alert("Заповнення електронної адреси обовязкове")}
  } else {
    alert("Заповніть поля форми!")
}
}