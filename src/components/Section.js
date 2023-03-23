// --- КЛАСС ОТВЕЧАЮЩИЙ ЗА ОТРИСОВКУ ЭЛЕМЕНТОВ НА СТРАНИЦЕ ---

class Section {
    // Первым параметром конструктор принимает объект с двумя свойствами: items и renderer, второй параметр — селектор контейнера
    constructor({renderer}, templateSelector) {
      this._renderer = renderer;
      this._templateContainer = document.querySelector(templateSelector);
    }
    // Метод отрисовки всех элементов
    renderItems(res) {
      res.forEach(this._renderer);
      
    }
    // Метод принимает DOM-элемент и добавляет его в контейнер
    addItem(cardElement) {
      this._templateContainer.prepend(cardElement);
    }
  }
  export { Section };