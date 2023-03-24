

class FormValidator {
  constructor(formElement, data){
    this._data = data;
    //console.log(data);
    this._form = formElement;
    //console.log(this._form)
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._buttonElement = formElement.querySelector(data.buttonElement);
    //console.log(this.formElement)
    this._inputList = Array.from(formElement.querySelectorAll(data.inputElement));
}
  
// Функция, которая добавляет класс с ошибкой
_showInputError(inputElement) {
  const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._data.inputErrorClass);
  console.log(this._data.inputErrorClass)
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

resetValidate() {
  this._inputList.forEach((inputItem) => { this._hideInputError(inputItem); })
  this._toggleButtonState();
}
enableValidation = () =>  this._setEventListeners();

 resetValidation = () => {
  this._toggleButtonState();
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement)
  })
 }
};

export default FormValidator;





