


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__name-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__name-error_active');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
   if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
  
};


function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
    
  });
}); 
};

function enableValidation () {
  const formList = Array.from(document.querySelectorAll('form')); 
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  setEventListeners(formElement);
  
}); 
}
enableValidation();

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
}


function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('form__submit_inactive');
} else {
  buttonElement.classList.remove('form__submit_inactive');
} 
}
enableValidation();