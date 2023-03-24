import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  // Принимает в конструктор селектор popup и callback сабмита формы
  constructor(popupSelector, { callbackFormSubmit }) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;

    this._popupFormItem = this._popupItem.querySelector('form');
    this._inputList = Array.from(this._popupFormItem.querySelectorAll('input'));
    this._sendButton = this._popupFormItem.querySelector('button');
    this._sendButtonText = this._sendButton.textContent;
    //console.log(this._inputList)
  }

  // Метод собирает данные всех полей формы
  _getInputValues() {
    // Наполняем пустой массив данными через forEach
    const formValues = {};
    this._inputList.forEach(inputItem => {
      formValues[inputItem.name] = inputItem.value;
      //console.log(inputItem.value)
    });
    return formValues;
  }

  // Метод добавления кнопке текста в момент сохранения
  putSavingProcessText() {
    this._sendButton.textContent = 'Сохранение...';
  }
  // Метод добавления стандартного текста кнопке
  returnSavingProcessText() {
    this._sendButton.textContent = this._sendButtonText;
  }

  // Связываем с методом getInputValues, добавляем обработчик клика и обработчик сабмита формы
  setEventListeners() {
    // Перезаписывает родительский метод setEventListeners
    super.setEventListeners();
    this._popupFormItem.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackFormSubmit(this._getInputValues());
    });
  }
  // Метод закрытия popup (перезаписывает родителя)
  close() {
    super.close();
    // Сбрасываем форму
    this._popupFormItem.reset();
  }
}

export { PopupWithForm };