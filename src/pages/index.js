import "./index.css";
import Card from "../components/card.js";

import {
    buttonEdit,
    nameTitle,
    about,
    popupProfile,
    popupAddform,
    buttonAdd
} from "../utils/utils.js";

import FormValidator from "../components/FormValidator.js";
import { data, initialCards,config } from "../utils/constants.js";
import Section from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const createCard = (initialCards) => {
  const newCard = new Card(config.selectorTemplate, initialCards, handleCardClick)
  return newCard.getElement()
}

const popupImageZoom = new PopupWithImage('#image-popup');
popupImageZoom.setEventListeners();

const handleCardClick = function (name, image) {
  popupImageZoom.open(name, image);
}

// Получение данных пользователя
const userInfo = new UserInfo({
  usernameSelector: '.profile__title',
  userDescriptionSelector: '.profile__subtitle'
});

// Объявление popup редактирования профиля
const popupEditeProfile = new PopupWithForm('#profile-popup', {
  callbackFormSubmit: (profileData) => {
    console.log(profileData)
    userInfo.setUserInfo(
      {
        username: profileData.textName,
        description: profileData.textAbout
      },
    );
    popupEditeProfile.close();

  }
});
popupEditeProfile.setEventListeners();

const popupAddCard = new PopupWithForm('#cards-popup', {
  callbackFormSubmit: (formValues) => {
    console.log(formValues)
    renderInitialCards.addItem(createCard({
      name: formValues.placename,
      link: formValues.placeimage
    }));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();

const validatorAddCard = new FormValidator(popupAddform, data);
validatorAddCard.enableValidation();

const validatorProfile = new FormValidator(popupProfile, data);
validatorProfile.enableValidation();

// --- ДЕЙСТВИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ---
//Cоздаем экземпляр класса Section и отрисовываем все элементы на странице
const renderInitialCards = new Section({
  items: initialCards,
  renderer: (cardList) => {
    renderInitialCards.addItem(createCard(cardList));
  }
}, '.cards');
renderInitialCards.renderItems();

// Слушатель на иконку редактирования профиля
buttonEdit.addEventListener('click', function () {
  popupEditeProfile.open();
  const actualUserInfo = userInfo.getUserInfo();
  nameTitle.setAttribute('value', actualUserInfo.username);

  about.setAttribute('value', actualUserInfo.description);
});

// Слушатель на иконку добавления карточки
buttonAdd.addEventListener('click', function () {
  popupAddCard.open();
  validatorAddCard.resetValidation();
});