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
const nameAddinput = document.querySelector('.popup-addimage__input_place');
const linkAddinput = document.querySelector('.popup-addimage__input_place-link');

const editButton = document.querySelector('.profile__edit-button');
const popupEditprofile = document.querySelector('.popup');
const closeButtonprofile = document.querySelector('.popup__close-button');

const profileTitle = document.querySelector('.profile__title');
const profilesubtitle = document.querySelector('.profile__subtitle');
const nameTitle = document.querySelector('.popup__input_name_title');
const about = document.querySelector('.popup__input_name_subtitle');
const save = document.querySelector('.popup__save-button');
const mainForm = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup-addimage');
const addButton = document.querySelector('.profile__add-button')
const popupAddclosebutton = document.querySelector('.popup-addimage__close-button')

const popupImage = document.querySelector('.popup-image')
const popupImageclosebutton = document.querySelector('.popup-image__close-button')

function createCard({name , link}) {
  const card = cardsContainer.cloneNode(true);
  
  const cardLink = card.querySelector('.cards__image');
  cardLink.src = link;
  const cardTitle = card.querySelector('.cards__title');
  cardTitle.textContent = name;
  cardLink.alt = name;
  const deleteButton = card.querySelector('.image-trash');
  const deleteCard = () => {
    card.remove();
  }
  const cardLikebutton = card.querySelector('.cards__like-button');
  
  const likeCard = () => {
    cardLikebutton.classList.toggle('cards__like-button_active');
  }

  //const imageOpen = card.querySelector('.Image-open')
 
  
  const photoOpen = () => {
    popupImage.classList.add('popup_opened')
    imageOpen.src = link;
    imageOpentitle.textContent = (cardTitle.textContent);
    
    popupImageclosebutton.addEventListener('click', photoClose);
  }
  const photoClose = () => {
    popupImage.classList.remove('popup_opened')
    
  }
 
  cardLink.addEventListener('click' , photoOpen)
  cardLikebutton.addEventListener('click' , likeCard );
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

renderCards();

editButton.addEventListener('click',  () => { openPopup(popupEditprofile)} );
//function popupOpen() {
//    nameTitle.value = profileTitle.textContent;
  //  about.value = profilesubtitle.textContent;
    //openPopup(popupEditprofile);
//}

closeButtonprofile.addEventListener('click', () => { closePopup(popupEditprofile)});

//function popupClose() {
 // closePopup(popupEditprofile);
  //popupEditprofile.classList.remove('popup_opened');
//}




function handleFormSubmit (event) {
    event.preventDefault();   
    profileTitle.textContent = nameTitle.value;
    profilesubtitle.textContent = about.value;
    popupClose()
}
mainForm.addEventListener('submit', handleFormSubmit);

addButton.addEventListener('click', () => { openPopup(popupAdd) });

//function popupAddopen() {
//    popupAdd.classList.add('popup_opened')
//};

popupAddclosebutton.addEventListener ('click', () => {closePopup(popupAdd) });

//function popupAddclose() {
 //   popupAdd.classList.remove('popup_opened')
//};


function openPopup(popup) {
  popup.classList.add('popup_opened');
  nameTitle.value = profileTitle.textContent;
  about.value = profilesubtitle.textContent;
} 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
} 