import "./index.css";
import Card from "../components/card.js";

import { ApiFind } from "../utils/ApiFind.js";

import {
    buttonEdit,
    nameTitle,
    about,
    popupProfile,
    popupAddform,
    buttonAdd,
    descriptionInput,
    popupAvatarEdit,
    popupAvatarEditForm,
    iconAvatarEdit,
} from "../utils/utils.js";

import FormValidator from "../components/FormValidator.js";
import { data } from "../utils/constants.js";
import {Section} from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupNotice } from "../components/PopupNotice.js";

const apiConnect = new Api (ApiFind);

let userId;

const userInfo = new UserInfo({
  usernameSelector: '.profile__title',
  userDescriptionSelector: '.profile__subtitle',
  userAvatarSelector: '.profile__avatar',
});
// Объявление функции для добавления карточки
const renderCard  = function (cardObject) {
  // Последним аргументом передаются всевозможные действия с карточкой
  const cardItem = new Card(cardObject, '#card-template', userId, { cardId: cardObject._id, authorId: cardObject.owner._id, }, {
    // Увеличение картинки
    handleCardZoom: (name, image) => { popupImageZoom.open(name, image) },
    // Удаление карточки
    handleCardDelete: (cardElement, cardId) => { popupNoticeDelete.open(cardElement, cardId) },
    // Добавление лайка
    handleCardLike: (cardId) => { apiConnect.putCardLike(cardId)
        .then((res) => {
          cardItem.renderCardLike(res);
        })
        .catch((err) => { console.log(`При лайке карточки возникла ошибка, ${err}`) })
    },
    // Удаление лайка
    handleCardDeleteLike: (cardId) => { apiConnect.deleteCardLike(cardId)
        .then((res) => {
          cardItem.renderCardLike(res);
        })
        .catch((err) => { console.log(`При дизлайке карточки возникла ошибка, ${err}`) })
    },
  });
  return cardItem.getElement();
}

// Наполнение страницы карточками через API
const renderInitialCards = new Section({
  renderer: (cardObject) => {
    renderInitialCards.addItem(renderCard(cardObject));
  }
}, '.cards');


// Общий промис, срабатывающий при положительном результате обоих запросов
Promise.all([ apiConnect.getUserData(), apiConnect.getInitialCards() ]).then(([ userProfileData, cardObject ]) => {
    userId = userProfileData._id;
    userInfo.setUserInfo({ username: userProfileData.name, description: userProfileData.about });
    renderInitialCards.renderItems(cardObject.reverse());
    //console.log(userProfileData.name)
    userInfo.setUserAvatar(userProfileData.avatar);
  })
  //.catch((err) => { console.log(`Возникла глобальная ошибка, ${err}`) })
  
// Объявление popup всплывающего изображения
const popupImageZoom = new PopupWithImage('#image-popup');
popupImageZoom.setEventListeners();
// Объявление popup редактирования аватара
const popupEditeAvatar = new PopupWithForm('#avatar-popup', {
  callbackFormSubmit: (userProfileData) => { popupEditeAvatar.putSavingProcessText();console.log(userProfileData), apiConnect.sendAvatarData(userProfileData)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        popupEditeAvatar.close();
      })
      .catch((err) => { console.log(`При обновлении аватара возникла ошибка, ${err}`) })
      .finally(() => {
        popupEditeAvatar.returnSavingProcessText();
      })
  }
});
popupEditeAvatar.setEventListeners();
// Объявление popup подтверждения удаления карточки
const popupNoticeDelete = new PopupNotice(".popup-confirm", {
  callbackNotice: (cardElement, cardId) => { apiConnect.deleteCard(cardId)
      .then(() => {
        cardElement.deleteCard();
        popupNoticeDelete.close();
      })
      .catch((err) => { console.log(`При удалении карточки возникла ошибка, ${err}`) })
  }
});
popupNoticeDelete.setEventListeners();
// Объявление popup редактирования профиля
const popupEditeProfile = new PopupWithForm('#profile-popup', {
  callbackFormSubmit: (userProfileData) => { popupEditeProfile.putSavingProcessText(); apiConnect.sendUserData(userProfileData)
    
      .then((res) => {
        userInfo.setUserInfo({ username: res.name, description: res.about });
        
        popupEditeProfile.close();
        //console.log(userProfileData)
      })
      //.catch((err) => { console.log(`При редактировании профиля возникла ошибка, ${err}`) })
      .finally(() => {
        popupEditeProfile.returnSavingProcessText();
      })
  }
});
popupEditeProfile.setEventListeners();
// Объявление popup добавления новой карточки
const popupAddCard = new PopupWithForm('#cards-popup', {
  callbackFormSubmit: (formValues) => { popupAddCard.putSavingProcessText(); apiConnect.addNewCard({ name: formValues.placename, link: formValues.placeimage })
      .then((card) => {
        renderInitialCards.addItem(renderCard(card));
        popupAddCard.close();
      })
      .catch((err) => { console.log(`При добавлении новой карточки возникла ошибка, ${err}`) })
      .finally(() => {
        popupAddCard.returnSavingProcessText();
      })
  }
});
popupAddCard.setEventListeners();


const validatorAddCard = new FormValidator(popupAddform, data);
validatorAddCard.enableValidation();

const validatorProfile = new FormValidator(popupProfile, data);
validatorProfile.enableValidation();

const profileAvatarEditValidate = new FormValidator(popupAvatarEditForm, data);
profileAvatarEditValidate.enableValidation();

// Слушатель на иконку редактирования профиля

buttonEdit.addEventListener('click', function () {
  popupEditeProfile.open();
  validatorProfile.resetValidate();
  const actualUserInfo = userInfo.getUserInfo();
  nameTitle.value = actualUserInfo.username;
  about.value = actualUserInfo.description;
});

//buttonEdit.addEventListener('click', function () {
//  popupEditeProfile.open();
//  const actualUserInfo = userInfo.getUserInfo();
//  nameTitle.value = actualUserInfo.username;
//  about.value = actualUserInfo.description;
//  
//});

// Слушатель на иконку добавления карточки
buttonAdd.addEventListener('click', function () {
  popupAddCard.open();
  validatorAddCard.resetValidation();
});

// Слушатель на иконку изменения аватара
iconAvatarEdit.addEventListener('click', function () {
  popupEditeAvatar.open();
  profileAvatarEditValidate.resetValidate();
});