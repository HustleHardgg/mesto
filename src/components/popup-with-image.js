import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  // Принимает в конструктор селектор popup
  constructor(selectorPopupForm) {
    super(selectorPopupForm);
    this._popupDescription = document.querySelector('.popup-image__title');
    this._popupImage = document.querySelector('.popup-image__open');
    //console.log(selectorPopupForm)
  }
  
  // Метод перезаписывает родительский метод open
  open(description, image) {
    // Вставляем в popup картинку с src изображения и подписью к картинке
    this._popupDescription.textContent = description;
    this._popupImage.src = image;
    this._popupImage.alt = description;
    super.open();
  }
}

export { PopupWithImage };