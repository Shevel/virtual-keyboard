const keylayoutEN = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'caps-lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.' , '/', 'up', 'R shift ',
  'ctrl', 'win', 'alt', 'space-bar', 'R alt', 'R ctrl', 'left', 'down', 'right'
];
const keylayoutRU = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'caps-lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
  'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю' , '.', 'up', 'R shift ',
  'ctrl', 'win', 'alt', 'space-bar', 'R alt', 'R ctrl', 'left', 'down', 'right'
];
const Keyboard = {
  elements: {
    textarea: null,
    main: null,
    keysContainer: null,
    keys: []
  },
  eventHandlers: {
    oninput: null
  },
  properties: {
    value: '',
    capsLock: false
  },
  init () {
    // create main elements
    this.elements.textarea = document.createElement('textarea');
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');
    // setup main elements
    this.elements.textarea.classList.add('text-area');
    this.elements.main.classList.add('keyboard');
    this.elements.textarea.setAttribute('placeholder','Click here and type your text..');
    this.elements.keysContainer.classList.add('keys');
    //this.elements.keysContainer.append(this._createKeys(keylayoutEN));
    this.elements.keysContainer.append(this._createKeys(keylayoutRU));
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.key');
    // add to DOM
    this.elements.main.append(this.elements.keysContainer);
    document.body.append(this.elements.textarea);
    document.body.append(this.elements.main);

    //
    document.querySelectorAll('.text-area').forEach(element => {
      element.addEventListener('focus', () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });
  },
  _createKeys(keylayout) {
    const fragment = document.createDocumentFragment();
    const  createIconHTML = (icon_name) => {
      return `<i class="${icon_name}"></i>`;
    };
    keylayout.forEach(key => {
      const keyElement = document.createElement('button');
      const insertLineBrake = ['backspace', '\\', 'enter', 'R shift '].indexOf(key) !== -1;
      keyElement.setAttribute("type","button");
      keyElement.classList.add("key");

      switch (key) {
        case 'backspace':
          keyElement.classList.add("wide");
          keyElement.innerHTML = createIconHTML("backspace");
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0,this.properties.value.length - 1);
            this._triggerEvent('oninput');
          });
          break;
        case 'tab':
            keyElement.classList.add("wide");
            keyElement.innerHTML = createIconHTML("tab");
            keyElement.addEventListener('click', () => {
              this.properties.value += '    ';
              this._triggerEvent('oninput');
            });
          break;
        case 'caps-lock':
          keyElement.classList.add("wide", "activatable");
          keyElement.innerHTML = createIconHTML("caps-lock");
          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle('active', this.properties.capsLock);
          });
          break;
        case 'enter':
          keyElement.classList.add("wide");
          keyElement.innerHTML = createIconHTML("enter");
          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          });
          break;
        case 'space-bar':
          keyElement.classList.add("extra-wide");
          keyElement.innerHTML = createIconHTML("space-bar");
          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          });
          break;
        case 'up':
          keyElement.innerHTML = createIconHTML("up");
          keyElement.innerText = '↑';
          keyElement.addEventListener('click', () => {
            this.properties.value += '↑';
            this._triggerEvent('oninput');
          });
          break;
        case 'left':
          keyElement.innerHTML = createIconHTML("left");
          keyElement.innerText = '←';
          keyElement.addEventListener('click', () => {
            this.properties.value += '←';
            this._triggerEvent('oninput');
          });
          break;
        case 'right':
          keyElement.innerHTML = createIconHTML("right");
          keyElement.innerText = '→';
          keyElement.addEventListener('click', () => {
            this.properties.value += '→';
            this._triggerEvent('oninput');
          });
          break;
        case 'down':
          keyElement.innerHTML = createIconHTML("down");
          keyElement.innerText = '↓';
          keyElement.addEventListener('click', () => {
            this.properties.value += '↓';
            this._triggerEvent('oninput');
          });
          break;
        case 'win':
          keyElement.innerHTML = createIconHTML("win");
          keyElement.addEventListener('click', () => {
            this.properties.value += 'Win';
            this._triggerEvent('oninput');
          });
          break;
        default:
          keyElement.textContent = key.toLocaleLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock ? key.toLocaleUpperCase() : key.toLocaleLowerCase();
            this._triggerEvent('oninput');
          });
          break;
      }
      fragment.append(keyElement);
      if(insertLineBrake) {
        fragment.append(document.createElement("br"));
      }
    });
    return fragment;
  },
  _triggerEvent(HandlerName) {
    if (typeof this.eventHandlers[HandlerName] == 'function') {
      this.eventHandlers[HandlerName](this.properties.value);
    }
  },
  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key  of this.elements.keys) {
      if(key.innerText.length === 1) {
        key.textContent = this.properties.capsLock ? key.textContent.toLocaleUpperCase() : key.textContent.toLocaleLowerCase();
      } 
    }
  },
  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
  }
};

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});