import Card from "./card.js";
import FormValidator from "./Formvalidate.js";

const cardTemplate = document.querySelector('.cards');
const cardsContainer = document.querySelector('.cards__item').content.querySelector('.cards__content');

const imageOpen = document.querySelector('.popup-image__open');
const imageOpentitle = document.querySelector('.popup-image__title')

const formCreate = document.querySelector('.popup-addimage');
const buttonCreate = document.querySelector('.popup__create-button');
const nameAddinput = document.querySelector('.popup-addimage__input_place');
const linkAddinput = document.querySelector('.popup-addimage__input_place-link');

const buttonEdit = document.querySelector('.profile__edit-button');
const popupEditprofile = document.querySelector('.popup');
const buttonCloseprofile = document.querySelector('.popup__close-button');

const profileTitle = document.querySelector('.profile__title');
const profilesubtitle = document.querySelector('.profile__subtitle');
const nameTitle = document.querySelector('.popup__input_name_title');
const about = document.querySelector('.popup__input_name_subtitle');
const buttonSave = document.querySelector('.popup__save-button');
const mainForm = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup__form');
const popupAdd = document.querySelector('.popup-addimage');
const popupAddform = document.querySelector('.popup-addimage__form');

const buttonAdd = document.querySelector('.profile__add-button');

const popupAddclosebutton = document.querySelector('.popup-addimage__close-button');

const popupImage = document.querySelector('.popup-image');
const popupImageclosebutton = document.querySelector('.popup-image__close-button');



const ESC_CODE = 'Escape';

const image = document.querySelector('.cards__image');
const title = document.querySelector('.cards__title');

//const formAddCard = document.querySelector('.popup-addimage__form')
//const formProfile = document.querySelector('.popup__form')

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
  selectorPopupForm: '.popup-addimage__form',
}

const cardList = document.querySelector(config.selectorCards);

for (const item of initialCards) {
  const card = new Card(config.selectorTemplate, item, photoOpen);
  const element = card.getElement();
  cardList.append(element);
}

//Функция отправки формы добавления карточки 
//function addformcard (event) {
// event.preventDefault();
//  cardsContainer.prepend(cardElement);
//  closePopup(popupAdd);
//  nameAddinput.value = "";
//  linkAddinput.value = "";  
//};

//function createCard() {
//  const newCard = new Card(cardsContainer, {name:nameAddinput.value, link:linkAddinput.value}, addformcard);
//  const cardElement = newCard.getElement();
//  return cardElement;
//}


//Открытие картинки
function photoOpen(name, link) {
  imageOpen.alt = name;
  imageOpen.src = link;
  imageOpentitle.textContent = name;
  openPopup(popupImage);
}
popupImageclosebutton.addEventListener('click', () => { closePopup(popupImage) });

//Открытие попапа профиля

buttonEdit.addEventListener('click', openPropfilePopup);
function openPropfilePopup() {
  nameTitle.value = profileTitle.textContent;
  about.value = profilesubtitle.textContent;
  openPopup(popupEditprofile);
}
buttonCloseprofile.addEventListener('click', () => { closePopup(popupEditprofile) });

function handleFormSubmitPropfilePopup(event) {
  event.preventDefault();
  profileTitle.textContent = nameTitle.value;
  profilesubtitle.textContent = about.value;
  closePopup(popupEditprofile)
}
mainForm.addEventListener('submit', handleFormSubmitPropfilePopup);
buttonAdd.addEventListener('click', () => { openPopup(popupAdd) });
popupAddclosebutton.addEventListener('click', () => { closePopup(popupAdd) });
popupAddform.addEventListener('submit', createCard)





//Открытие попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
  popup.addEventListener('click', closePopupOverlay);

}
//Закрытие попапа

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
  popup.removeEventListener('click', closePopupOverlay);
}

popupAdd.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupAdd);
  }
});


popupImage.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupImage);
  }
});

const closePopupOverlay = function (e) {
  if (e.target === e.currentTarget) {
    closePopup(e.target);
  }
};

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}






const ValidatorAddCard = new FormValidator(popupAddform, data);
ValidatorAddCard.enableValidation();

const ValidatorProfile = new FormValidator(popupProfile, data);
ValidatorProfile.enableValidation();



//function createCard(name, link) {
//   const card = new Card(config.selectorCards, name , link)
//   const cardElement = card.getElement();
//   return cardElement
//}

//const addCards = (name, link) => {
//  const card = createCard(name, link);
//  cardsContainer.prepend(card);
//}

//const renderCard = (initialCards) => {
//  initialCards.forEach((item) => {
//    addCards(item.name, item.link);
//  })
//}

//renderCard(initialCards);


const renderIntialCards = (array) => {
  array.forEach((item) => {
    addCard(item.name , item.link);    
  });
}
function createCard(name, link) {
  const card = new Card('.cards__item', {name, link});
  const cardElement = card.getElement();
  return cardElement;
}
const addCard = (name , link) => {
  const card = createCard(name, link);
  cardsContainer.prepend(card)
};

popupAddform.addEventListener ('submit', (evt)=>{
  evt.preventDefault();
  addCard(nameAddinput.value, linkAddinput.value)
  closePopup(popupAdd);
  //formCreate.reset();
});

renderIntialCards(initialCards);
