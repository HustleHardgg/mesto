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

const cardTemplate = document.querySelector('.cards');
const cardsContainer = document.querySelector('.cards__item').content.querySelector('.cards__content');

const imageOpen = document.querySelector('.popup-image__open');
const imageOpentitle = document.querySelector('.popup-image__title')

const formCreate = document.querySelector('.popup-addimage');
const createButton = document.querySelector('.popup__create-button');
const nameAddinput = document.querySelector('.popup__input_place');
const linkAddinput = document.querySelector('.popup__input_place-link');

const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

const profileTitle = document.querySelector('.profile__title');
const profilesubtitle = document.querySelector('.profile__subtitle');
let nameTitle = document.querySelector('.popup__input_name_title');
let about = document.querySelector('.popup__input_name_subtitle');
const save = document.querySelector('.popup__save-button');
const mainForm = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup-addimage');
const addButton = document.querySelector('.profile__add-button')
const popupAddclosebutton = document.querySelector('.popup-addimage__close-button')

function createCard({name , link}) {
  const card = cardsContainer.cloneNode(true);
  console.log('card: ' , card);
  const cardLink = card.querySelector('.cards__image');
  cardLink.src = link;
  const cardTitle = card.querySelector('.cards__title');
  cardTitle.textContent = name;
  const deleteButton = card.querySelector('.image-trash');
  const deleteCard = () => {
    card.remove();
  }
  const cardLikebutton = card.querySelector('.cards__like-button');
  
  const cardLike = () => {
    cardLikebutton.classList.toggle('cards__like-button_active');
  }

  //const imageOpen = card.querySelector('.Image-open')
  const popupImage = document.querySelector('.popup-image')
  const popupImageclosebutton = document.querySelector('.popup-image__close-button')
  
  const photoOpen = () => {
    popupImage.classList.add('popup_opened')
    imageOpen.setAttribute('src' , cardLink.src);
    imageOpentitle.textContent = (cardTitle.textContent);
    console.log(cardTitle.textContent);
  }
  const photoClose = () => {
    popupImage.classList.remove('popup_opened')
  }
  popupImageclosebutton.addEventListener('click', photoClose)
  cardLink.addEventListener('click' , photoOpen)
  cardLikebutton.addEventListener('click' , cardLike );
  deleteButton.addEventListener('click', deleteCard);
  
  return card;
}

function renderCards() {
  initialCards.forEach(item =>{
    const cardHtml = createCard(item);
    cardTemplate.prepend(cardHtml);
  });
}

function  handleAddFormSubmit(event) {
  event.preventDefault();
  const newCard = createCard({
    name: nameAddinput.value,
    link: linkAddinput.value
  }) 
  
  cardTemplate.prepend(newCard);
  
}

formCreate.addEventListener('submit', handleAddFormSubmit);
console.log('submit', formCreate);
renderCards();

editButton.addEventListener('click', popupOpen);
function popupOpen() {
    nameTitle.value = profileTitle.textContent;
    about.value = profilesubtitle.textContent;
    popup.classList.add('popup_opened');

}

closeButton.addEventListener('click', popupClose);
function popupClose() {
    popup.classList.remove('popup_opened');
}




function handleFormSubmit (event) {
    event.preventDefault();   
    profileTitle.textContent = nameTitle.value;
    profilesubtitle.textContent = about.value;
    popupClose()
}
mainForm.addEventListener('submit', handleFormSubmit);

addButton.addEventListener('click',popupAddopen);
function popupAddopen() {
    popupAdd.classList.add('popup_opened')
};

popupAddclosebutton.addEventListener ('click', popupAddclose );
function popupAddclose() {
    popupAdd.classList.remove('popup_opened')
};



