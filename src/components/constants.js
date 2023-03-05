const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  
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
  export {data, initialCards,config};