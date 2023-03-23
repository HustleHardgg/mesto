  //для валидации 
  const data = {
    formElement: 'form',
    inputElement: 'input',
    buttonElement: 'button',

    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorElement: 'popup__name-error_active'
  };
  const config = {
    selectorCards: '.cards',
    selectorTemplate: '.cards__item',
    selectorPopupContainer: '.popup-addimage__container',
    selectorPopupForm: '.popup',
  }
  //Селекторы для создания экземпляра класса 
  export {data, config};