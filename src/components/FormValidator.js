

class FormValidator {
  constructor(formElement, data){
    this._data = data;
    //console.log(data);
    this._form = formElement;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._buttonElement = formElement.querySelector(data.buttonElement);
    this._inputList = Array.from(formElement.querySelectorAll(data.inputElement));
}
  
// Функция, которая добавляет класс с ошибкой
_showInputError(inputElement) {
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._data.inputErrorClass);
  errorElement.classList.add(this._data.errorElement);
  errorElement.textContent = inputElement.validationMessage;
}
// Функция, которая удаляет класс с ошибкой
_hideInputError(inputElement) {
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._data.inputErrorClass);
  errorElement.classList.remove(this._data.errorElement);
  errorElement.textContent = '';
}

// Функция, которая проверяет валидность поля
_checkInputValidity(inputElement) {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement);
  } else {
    this._hideInputError(inputElement);
  }
};

//Проверка поля ввода на валидность

_hasInvalidInput = () => this._inputList.some((inputElement) => !inputElement.validity.valid);


_toggleButtonState = () => {
  if (this._hasInvalidInput()) {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
    
  } else {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
}
//Установка слушателей событий 
_setEventListeners = () => {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => { 
    inputElement.addEventListener('input',  () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
};

enableValidation = () =>  this._setEventListeners();

 resetValidation = () => {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement)
  })
 }
};

export default FormValidator;





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


