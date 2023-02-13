class cards {
    constructor(template, card) {
        this._template = template;
        this._name = card.name;
        this._link = card.link;
        this._deleteCard = this._deleteCard.bind(this);
        this._likeCard = this._likeCard.bind(this);
    }
    _getElementFromTemplate() {
        return document.querySelector(this._template)
            .content
            .children[0]
            .cloneNode(true);
    }
    _addEventListeners() {
        this._element.querySelector('.image-trash').addEventListener('click', this._deleteCard);
        this._element.querySelector('.cards__like-button').addEventListener('click', this._likeCard);
    }
    _deleteCard() {
        this._element.remove();
    }
    _likeCard(evt) {
        evt.target.classList.toggle('cards__like-button_active');
    }




    _getElement() {
        this._element = this._getElementFromTemplate();
        this._element.querySelector('.cards__image').alt = this._name;
        this._element.querySelector('.cards__title').textContent = this._name;
        this._element.querySelector('.cards__image').src = this._link;
        
        this._addEventListeners();

        return this._element;
    }
}
export default cards;