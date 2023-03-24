const buttonEdit = document.querySelector('.profile__edit-button');

const nameTitle = document.querySelector('#popup__name');

const about = document.querySelector('#popup__about');

const popupProfile = document.querySelector('.popup__form');

const popupAddform = document.querySelector('.popup-addimage__form');

const buttonAdd = document.querySelector('.profile__add-button');

// Получаем иконку редактирования аватара
const iconAvatarEdit = document.querySelector('.profile__avatar-edit');

// Получаем popup редактирования аватара
const popupAvatarEdit = document.querySelector('#avatar-popup');
//console.log(popupAvatarEdit)
// Получаем input описания
const descriptionInput = popupProfile.querySelector('#description-input');

// Получаем форму редактирования аватара
const popupAvatarEditForm = popupAvatarEdit.querySelector('.popup-update__form');


export {
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
};