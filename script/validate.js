const config = {
  formElement: 'form',
  inputElement: 'input',
  buttonElement: 'button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorElement: 'popup__name-error_active'
};


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, config ) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  //console.log(errorElement)
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorElement);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, config ) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorElement);
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config );
  } else {
    hideInputError(formElement, inputElement, config);
  }

};


function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
  
  const buttonElement = formElement.querySelector(config.buttonElement);
  toggleButtonState(inputList, buttonElement, config);
 

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);

    });
  });
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formElement));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
}


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}


function toggleButtonState(inputList, buttonElement, config ) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    
    buttonElement.disabled = false;
  }

}
enableValidation(config);