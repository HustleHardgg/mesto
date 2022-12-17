const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

const profileTitle = document.querySelector('.profile__title');
const profilesubtitle = document.querySelector('.profile__subtitle');
let nameTitle = document.querySelector('.popup__input_name');
let about = document.querySelector('.popup__input_about');
const save = document.querySelector('.popup__save-button');
const mainForm = document.form;

editButton.addEventListener('click', popupOpen);
function popupOpen() {
    popup.classList.add('popup_opened');
}

closeButton.addEventListener('click', popupClose);
function popupClose() {
    popup.classList.remove('popup_opened');
}


popup.addEventListener('click', (event) => {

    if (event.target === event.currentTarget) {
        popup.classList.remove('popup_opened')
    };
})



function handleFormSubmit (event) {
    event.preventDefault();
   
    profileTitle.textContent=nameTitle.value;
    profilesubtitle.textContent=about.value;
    
}

save.addEventListener('click', handleFormSubmit);