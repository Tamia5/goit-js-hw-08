import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formInput = form.querySelector('input[name="email"]');
const formTextarea = form.querySelector('textarea[name="message"]');

updateForm();
formInput.addEventListener('input', throttle(handleInput,500));
formTextarea.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);

function handleInput() {
    const formData = {
        email: formInput.value,
        message: formTextarea.value
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

}

function updateForm() {
    const savedState = localStorage.getItem("feedback-form-state");
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    formInput.value = parsedState.email;
    formTextarea.value = parsedState.message;
  } 
}

function handleSubmit(event) {
    event.preventDefault();

    const formData = {
        email: formInput.value,
        message: formTextarea.value,
    };

    if (formData.email && formData.message) {
        console.log('Submitted feedback:', formData);
        localStorage.clear();
        event.currentTarget.reset();
    } else 
        alert('Please make sure all fields are filled!');
}