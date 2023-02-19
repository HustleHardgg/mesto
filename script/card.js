
class Card {
    constructor(template, card, photoOpen) {
        this._template = template;
        this._name = card.name;
        this._link = card.link;
        this._deleteCard = this._deleteCard.bind(this);
        this._likeCard = this._likeCard.bind(this);
        //this._element.querySelector('.cards__image') = this._cardimage;
        console.log(this._cardimage);
        this._photoOpen = photoOpen;
        
    }
    _getElementFromTemplate() {
        const cardElement = document
        .querySelector(this._template)
            .content
            .querySelector('.cards__content')
            .cloneNode(true);
            
            return cardElement
    
    }
    


    _addEventListeners() {
        this._element.querySelector('.image-trash').addEventListener('click', this._deleteCard );
        this._element.querySelector('.cards__like-button').addEventListener('click', this._likeCard);
        this._cardimage.addEventListener('click', () => this._photoOpen(this._name, this._link) );
    }
    _deleteCard() {
        this._element.remove();
        this._element = "" ;
        
        
    }
    _likeCard(evt) {
        evt.target.classList.toggle('cards__like-button_active');
    }

    getElement() {
        this._element = this._getElementFromTemplate();
        this._cardimage = this._element.querySelector('.cards__image');
        this._cardimage.alt = this._name;
        this._cardimage.src = this._link;
        this._element.querySelector('.cards__title').textContent = this._name;
        

        this._addEventListeners();
         
        return this._element;
        
    }
    

}
export default Card;