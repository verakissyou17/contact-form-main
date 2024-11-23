let isValid = false;

function validateFirstName() {
  const firstNameInput = document.getElementById('first-name');
  const firstNameError = document.getElementById('first-name-error');
  const firstName = firstNameInput.value.trim();
  if(firstName === '') {
    firstNameError.textContent = 'This field is required';
    firstNameInput.classList.add('error');
    isValid = false;
  } else {
    firstNameError.textContent = '';
    firstNameInput.classList.remove('error');
    isValid = true;
  }
  return isValid;
}


function validateLastName() {
  const lastNameInput = document.getElementById('last-name');
  const lastNameError = document.getElementById('last-name-error');
  const lastName = lastNameInput.value.trim();
  if(lastName === '') {
   lastNameError.textContent = 'This field is required';
   lastNameInput.classList.add('error');
    isValid = false;
  } else {
    lastNameError.textContent = '';
    lastNameInput.classList.remove('error');
    isValid = true;
  }

  return isValid;
}

function checkEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function validateEmail () {
  const emailInput = document.getElementById('email-address');
  const emailError = document.getElementById('email-address-error');
  const email = emailInput.value.trim();
  const emailChecked = checkEmail(email);
  if(email === '' || !emailChecked) {
    emailError.textContent = 'Please enter a valid email address';
    emailInput.classList.add('error');
    emailInput.setAttribute('placeholder', 'email#exemple.com');
    isValid = false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('error');
    emailInput.setAttribute('placeholder', '');
    isValid = true;
  }

  return isValid;
};

function validateQueryType() {
  const queryTypeGeneral = document.getElementById('general-button');
  const queryTypeSupport = document.getElementById('support-button');
  const queryError = document.getElementById('query-message');

  if (!queryTypeGeneral.checked && !queryTypeSupport.checked) {
    queryError.textContent = 'Please select a query type';
    isValid = false;
  } else {
    queryError.textContent = '';
    isValid = true;
  }

  return isValid;
}

function validateTextarea () {
  const textareaInput = document.getElementById('message');
  const textareaError = document.getElementById('message-error');
  const message = textareaInput.value.trim();
  if(message === '') {
    textareaError.textContent = 'This field is required';
    textareaInput.classList.add('error');
    isValid = false;
  } else {
    textareaError.textContent = '';
    textareaInput.classList.remove('error');
    isValid = true;
  }
  return isValid;
}

function validateTerms(){
  const termsCheckbox = document.getElementById('terms-conditions');
  const termsError = document.getElementById('terms-conditions-error');
  if(!termsCheckbox.checked) {
    termsError.textContent = 'To submit this form, please consent to being contacted';
    isValid = false;
  } else {
    termsError.textContent = '';
    isValid = true;
  }
  return isValid;
}

document.querySelector('.my-form').addEventListener('submit', (e) => {
  e.preventDefault();
 const firstName = validateFirstName();
 const lastName = validateLastName();
 const email = validateEmail();
 const query = validateQueryType();
 const message =  validateTextarea();
 const terms = validateTerms();
  if(firstName && lastName && email && query && message && terms) {
    document.querySelector('header').classList.add('success');
    document.querySelector('main').style.marginTop = '0';
    document.querySelector('.my-form').reset();
  } else {
    document.querySelector('header').classList.remove('success');
    document.querySelector('main').style.marginTop = '1em';
  }
})

