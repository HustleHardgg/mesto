const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');






editButton.addEventListener('click' , (event) => { 
    event.preventDefault();
    popup.classList.add('popup__opened');

})

closeButton.addEventListener('click' , (event) => {
    popup.classList.remove('popup__opened');
})

 popup.addEventListener('click' , (event) => {
    
    if (event.target === event.currentTarget){
        popup.classList.remove('popup__opened')
    };
})

const save = document.querySelector('.popup__save');
save.addEventListener('click' , (event) => {
    let name = document.querySelector('.popup__name').value; 
    let about = document.querySelector('.popup__about').value;
    console.log(name);
    console.log(about);
    title.innerHTML='';
    title.insertAdjacentHTML('beforeend', `<h1 class="profile__title">${name}</h1>`);
    subtitle.innerHTML='';
    subtitle.insertAdjacentHTML('beforeend', `<h2 class="profile__subtitle">${about}</h2>`);
})
 
