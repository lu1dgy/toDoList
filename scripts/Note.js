class Note {

  static _htmlString = `
  <p class="list__element-text"></p>
  <button class="list__element-btn" type="button"></button>`
  constructor(data) {
    this._text = data
  }

  _getElementFromString() {
    const note = document.createElement('li');
    note.classList.add('list__element')
    note.insertAdjacentHTML('afterbegin', Note._htmlString);
    return note
  }

  _delHandler = () => {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.list__element-btn').addEventListener('click', this._delHandler);
  }

  generateNote() {
    this._element = this._getElementFromString();
    this._element.querySelector('.list__element-text').textContent = this._text;
    this._setEventListeners();
    return this._element
  }
}

export{Note}
