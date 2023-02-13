
const config = {
  formElement: 'form',
  inputElement: 'input',
  buttonElement: 'button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorElement: 'popup__name-error_active'
};

class FormValidator {//
  constructor(config, formElement){
    this.config = config;
    this.config = formElement;
  }
  // Функция, которая проверяет валидность поля
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, config );
    } else {
      hideInputError(formElement, inputElement, config);
    }
}
// Функция, которая добавляет класс с ошибкой
_showInputError(inputElement, errorMessage) {
  this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  this._inputElement.classList.add(config.inputErrorClass);
  this._errorElement.textContent = errorMessage;
  this._errorElement.classList.add(config.errorElement);
}
// Функция, которая удаляет класс с ошибкой
_hideInputError(inputElement) {
  this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  this._inputElement.classList.remove(config.inputErrorClass);
  this._errorElement.classList.remove(config.errorElement);
  this._errorElement.textContent = '';
}
_setEventListeners() {
  const inputList = Array.from(this._formElement.querySelectorAll(this.config.inputElement));
  
  const buttonElement = this._formElement.querySelector(config.buttonElement);
  _toggleButtonState(inputList, buttonElement, config);
 

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      _checkInputValidity(formElement, inputElement, config);
      _toggleButtonState(inputList, buttonElement, config);

    });
  });
  
}
enableValidation() {
  const formList = Array.from(document.querySelectorAll(config.formElement));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
}
_hasInvalidInput() {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });


}
_toggleButtonState () {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    
    buttonElement.disabled = false;
  }
}

enableValidation(){
 this.config
}
}
//export default FormValidator;





// Функция, которая добавляет класс с ошибкой
//const showInputError = (formElement, inputElement, errorMessage, config ) => {
//  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  //console.log(errorElement)
//  inputElement.classList.add(config.inputErrorClass);
//  errorElement.textContent = errorMessage;
//  errorElement.classList.add(config.errorElement);
//};

// Функция, которая удаляет класс с ошибкой
//const hideInputError = (formElement, inputElement, config ) => {
//  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  inputElement.classList.remove(config.inputErrorClass);
 // errorElement.classList.remove(config.errorElement);
 // errorElement.textContent = '';
//}; 

// Функция, которая проверяет валидность поля
//const checkInputValidity = (formElement, inputElement, config) => {
//  if (!inputElement.validity.valid) {
//    showInputError(formElement, inputElement, inputElement.validationMessage, config );
//  } else {
//    hideInputError(formElement, inputElement, config);
//  }
//
//};


//function setEventListeners(formElement, config) {
//  const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
//  
//  const buttonElement = formElement.querySelector(config.buttonElement);
//  toggleButtonState(inputList, buttonElement, config);
// 
//
//  inputList.forEach((inputElement) => {
//    inputElement.addEventListener('input', function () {
//      checkInputValidity(formElement, inputElement, config);
//      toggleButtonState(inputList, buttonElement, config);
//
//    });
//  });
//};

//function enableValidation(config) {
//  const formList = Array.from(document.querySelectorAll(config.formElement));
//
//  formList.forEach((formElement) => {
//    formElement.addEventListener('submit', (evt) => {
//      evt.preventDefault();
//    });
//
//    setEventListeners(formElement, config);
//  });
//}


//function hasInvalidInput(inputList) {
//  return inputList.some((inputElement) => {
//    return !inputElement.validity.valid;
//  });
//}


//function toggleButtonState(inputList, buttonElement, config ) {
//  if (hasInvalidInput(inputList)) {
//    buttonElement.classList.add(config.inactiveButtonClass);
//    
//    buttonElement.disabled = true;
 // } else {
//    buttonElement.classList.remove(config.inactiveButtonClass);
    
//    buttonElement.disabled = false;
//  }

//}


