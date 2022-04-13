const signUpForm = document.forms['signUpForm'];
const firstname = signUpForm['firstname'];
const lastname = signUpForm['lastname'];
const email = signUpForm['e-mail'];
const password = signUpForm['pwd'];
const formParts = [firstname, lastname, email, password];

signUpForm.addEventListener('submit', (e) => {
  let emailError = false;
  formParts.forEach((input) => {
    if (input.value === '') {
      errorStyle(input, `${input.placeholder} cannot be empty`);
      e.preventDefault();
      if (input.placeholder.toLowerCase().includes('email')) emailError = true;
      return;
    }
  });
  if (emailError) return;
  if (email.value.match(/^(.+)@(.+)$/)) return;
  errorStyle(email, 'Looks like this is not an email');
  e.preventDefault();
});

function errorStyle(element, errorMsg) {
  element.parentElement.classList.add('error');
  element.nextElementSibling.innerHTML = errorMsg;
  element.style.borderColor = 'hsl(0, 100%, 74%)';
  element.style.color = 'hsl(0, 100%, 74%)';
}

formParts.forEach((input) => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.remove('error');
    input.style.borderColor = 'hsl(246, 25%, 77%)';
    input.style.color = 'hsl(249, 10%, 26%) ';
  });
});
