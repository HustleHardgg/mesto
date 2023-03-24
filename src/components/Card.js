
class Card {
    constructor(cardObject, template, userId, authorData, handleActions) {
        this._card = cardObject;
        this._template = template;
        this._template;
        
        this._cardName = this._card.name;
        this._cardImage = this._card.link;
        
        this._userId = userId;
        this._cardId = authorData.cardId;
        this._authorId = authorData.authorId;

        this._cardZoom = handleActions.handleCardZoom;

        this._cardDelete = handleActions.handleCardDelete;
        this._putLike = handleActions.handleCardLike;
        this._removeLike = handleActions.handleCardDeleteLike;

    }
    _getElementFromTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector('.cards__content')
            .cloneNode(true);
        return cardElement

    }
    
    deleteCard() {
        this._cardElement.remove();
        this._cardElement = null;
    }

    // Общий метод реализации и отображения лайков и их количества
    renderCardLike(card) {
        this._likeArea = card.likes;
        if (this._likeArea.length === 0) {
            this.likeSelector.textContent = '';
        } else {
            // Брать количество лайков из ответа сервера
            this.likeSelector.textContent = this._likeArea.length;
        }
        if (this._likedCard()) {
            this._likeIcon.classList.add('cards__like-button_active');
        } else {
            this._likeIcon.classList.remove('cards__like-button_active');
        }
    }
    // Метод проверки наличия лайка на карточке
    _likedCard() {
        // Возврат без переменной.
        return this._likeArea.find((userLike) => userLike._id === this._userId);
    }

    // Метод обработки добавления и снятия лайков
    _interactLike() {
        if (this._likedCard()) {
            this._removeLike(this._cardId);
        } else {
            this._putLike(this._cardId);
        }
    }

    getElement() {
        this._cardElement = this._getElementFromTemplate();
        this._elementImages = this._cardElement.querySelector('.cards__image');
        this._elementName = this._cardElement.querySelector('.cards__title');
        this._likeIcon = this._cardElement.querySelector('.cards__like-button');
        this._deleteIcon = this._cardElement.querySelector('.image-trash');
        this.likeSelector = this._cardElement.querySelector('.cards__like-counter');
        // Передаём данные в карточку
        this._elementName.textContent = this._cardName;
        this._elementImages.src = this._cardImage;
        this._elementImages.alt = this._cardName;
        this.renderCardLike(this._card);
        // Навешиваем обработчики на экземпляр класса
        this._addEventHandlers();
        // Возвращаем готовый экземпляр
        return this._cardElement;
      }

      _addEventHandlers = () => {
        this._likeIcon.addEventListener('click', () => this._interactLike())
        this._elementImages.addEventListener('click', () => this._cardZoom(this._cardName, this._cardImage));
        if (this._userId === this._authorId) {
          this._deleteIcon.addEventListener('click', () =>  this._cardDelete(this, this._cardId));
        } else {
          this._deleteIcon.remove();
        }
      }
}
export default Card;
