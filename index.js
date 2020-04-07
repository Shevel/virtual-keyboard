const keys = {
  keyEn: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight', 'Control',
    'Win', 'Alt', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown',
    'ArrowRight'],

  keyEnCaps: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'Shift',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'ShiftRight', 'Control',
    'Win', 'Alt', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown',
    'ArrowRight'],

  keyEnPlusShift: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
    'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'ShiftRight', 'Control',
    'Win', 'Alt', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown',
    'ArrowRight'],

  keyRu: ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift',
    'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'ShiftRight', 'Control',
    'Win', 'Alt', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown',
    'ArrowRight'],

  keyRuCaps: ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
    'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift',
    'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'ShiftRight', 'Control',
    'Win', 'Alt', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown',
    'ArrowRight'],

  keyRuPlusShift: ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
    'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift',
    'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'ArrowUp', 'ShiftRight', 'Control',
    'Win', 'Alt', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown',
    'ArrowRight'],
};
let value = localStorage.value || 'keyEn';
let isCapsOn = false;
let isAltOn = false;
function changeLanguage() {
  switch (value) {
    case 'keyEn':
      if (!isCapsOn) {
        value = 'keyRu';
        break;
      }
      if (isCapsOn) {
        value = 'keyRuCaps';
        break;
      }
      break;
    case 'keyRu':
      if (!isCapsOn) {
        value = 'keyEn';
        break;
      }
      if (isCapsOn) {
        value = 'keyEnCaps';
        break;
      }
      break;
    case 'keyRuCaps':
      if (isCapsOn) {
        value = 'keyEnCaps';
        break;
      }
      if (!isCapsOn) {
        value = 'keyEn';
        break;
      }
      break;
    case 'keyEnCaps':
      if (isCapsOn) {
        value = 'keyRuCaps';
        break;
      }
      if (!isCapsOn) {
        value = 'keyRu';
        break;
      }
      break;
    default:
      break;
  }
  localStorage.value = value;
}
function isActive(element) {
  return document.getElementById(element).classList.contains('active');
}
function inputKey(key) {
  document.querySelector('.text-area').setRangeText(`${key}`,
    document.querySelector('.text-area').selectionStart,
    document.querySelector('.text-area').selectionEnd, 'end');
}

function backspace() {
  if (document.querySelector('.text-area').textLength === 0) {
    return;
  }
  if (document.querySelector('.text-area').selectionStart < document
    .querySelector('.text-area').selectionEnd
    && document.querySelector('.text-area').selectionStart === 0) {
    document.querySelector('.text-area').setRangeText('',
      document.querySelector('.text-area').selectionStart,
      document.querySelector('.text-area').selectionEnd, 'end');
    return;
  }
  if (document.querySelector('.text-area').selectionStart === document
    .querySelector('.text-area').selectionEnd) {
    document.querySelector('.text-area').setRangeText('',
      document.querySelector('.text-area').selectionStart - 1,
      document.querySelector('.text-area').selectionEnd, 'end');
  }
  document.querySelector('.text-area').setRangeText('',
    document.querySelector('.text-area').selectionStart,
    document.querySelector('.text-area').selectionEnd, 'end');
}

function preventDefaultKey(event, key) {
  switch (key) {
    case 'F1':
    case 'F2':
    case 'F3':
    case 'F4':
    case 'F5':
    case 'F6':
    case 'F7':
    case 'F8':
    case 'F9':
    case 'F10':
    case 'F11':
    case 'F12':
      break;
    default:
      break;
  }
  if (event.isTrusted) {
    event.preventDefault();
  }
}

function addActiveState(key) {
  document.getElementById(key).classList.add('active');
}

function removeActiveState(key) {
  if (!document.getElementById(key)) {
    return;
  }
  document.getElementById(key).classList.remove('active');
}

function createKeys(keyLang) {
  const fragment = document.createDocumentFragment();
  keyLang.forEach((key) => {
    const button = document.createElement('button');
    const insertLineBrake = ['Backspace', '\\', 'Enter', 'ShiftRight'].indexOf(key) !== -1;
    button.setAttribute('type', 'button');
    button.setAttribute('id', `${key}`);
    button.classList.add('key');
    switch (key) {
      case 'Backspace':
        button.classList.add('wide');
        button.innerText = 'Backspace';
        break;
      case 'Tab':
        button.classList.add('wide');
        button.innerText = 'Tab';
        break;
      case 'CapsLock':
        button.classList.add('wide', 'activatable');
        button.innerText = 'CapsLock';
        break;
      case 'Enter':
        button.classList.add('wide');
        button.innerText = 'Enter';
        break;
      case 'Space':
        button.classList.add('extra-wide');
        button.innerText = '__';
        break;
      case 'ArrowUp':
        button.innerText = '↑';
        break;
      case 'ArrowLeft':
        button.innerText = '←';
        break;
      case 'ArrowRight':
        button.innerText = '→';
        break;
      case 'ArrowDown':
        button.innerText = '↓';
        break;
      case 'ControlRight':
        button.classList.add('wide');
        button.innerText = 'Ctrl';
        break;
      case 'Control':
        button.classList.add('wide');
        button.innerText = 'Ctrl';
        break;
      case 'AltRight':
        button.classList.add('wide');
        button.innerText = 'Alt';
        break;
      case 'Alt':
        button.classList.add('wide');
        button.innerText = 'Alt';
        break;
      case 'ShiftRight':
        button.classList.add('wide');
        button.innerText = 'Shift';
        break;
      case 'Shift':
        button.classList.add('wide');
        button.innerText = 'Shift';
        break;
      case 'Win':
        button.innerText = 'Win';
        break;
      default:
        button.innerText = key;
        break;
    }
    fragment.append(button);
    if (insertLineBrake) {
      fragment.append(document.createElement('br'));
    }
  });
  return fragment;
}
const textArea = document.createElement('textarea');
textArea.classList.add('text-area');
textArea.setAttribute('placeholder', `Click here and type your text..
To switchlanguage press Alt + Ctrl
Нет привязки к реальному языку, т.е. следовательно необходимо переключать (ваш)системный
язык на тот, который сейчас на раскладке в приложении\nНе успел переделать до дедлайна ='(`);
document.body.append(textArea);

function initKeyboard(lang) {
  const keyboard = document.createElement('div');
  const buttons = document.createElement('div');
  keyboard.classList.add('keyboard');
  buttons.classList.add('keys');
  buttons.append(createKeys(lang));
  keyboard.append(buttons);
  document.body.append(keyboard);
  localStorage.value = value;
}

window.addEventListener('DOMContentLoaded', () => {
  initKeyboard(keys[value]);
  if (value === 'keyRuCaps' || value === 'keyEnCaps') {
    addActiveState('CapsLock');
  }
});
function keyDownHandler(e) {
  preventDefaultKey(e, e.key);
  switch (e.key) {
    case 'Delete':
      break;
    case ' ':
      addActiveState('Space');
      inputKey(e.key);
      break;
    case 'Tab':
      addActiveState(e.key);
      inputKey('\t');
      break;
    case 'Backspace':
      addActiveState(e.key);
      backspace();
      break;
    case 'Enter':
      addActiveState(e.key);
      inputKey('\n');
      break;
    case 'Meta':
      addActiveState('Win');
      break;
    case 'Control':
      if (e.altKey) {
        changeLanguage();
        document.querySelector('.keyboard').remove();
        initKeyboard(keys[value]);
        if (isCapsOn) {
          addActiveState('CapsLock');
        }
        break;
      }
      if (e.code === 'ControlRight') {
        addActiveState(e.code);
        return;
      }
      addActiveState(e.key);
      break;
    case 'Alt':
      if (e.code === 'AltRight') {
        addActiveState(e.code);
        return;
      }
      addActiveState(e.key);
      break;
    case 'Shift':
      if (e.code === 'ShiftRight' && !isActive(e.code)) {
        addActiveState(e.code);
        return;
      }
      if (!isActive(e.key)) {
        addActiveState(e.key);
        break;
      }
      break;
    case 'CapsLock':
      if (isActive(e.key)) {
        document.querySelector('.keyboard').remove();
        if (value === 'keyRu') {
          initKeyboard(keys.keyRu);
          removeActiveState(e.key);
          isCapsOn = false;
          break;
        }
        initKeyboard(keys.keyEn);
        removeActiveState(e.key);
        isCapsOn = false;
        break;
      }
      if (!isActive(e.key)) {
        document.querySelector('.keyboard').remove();
        if (value === 'keyRu') {
          initKeyboard(keys.keyRuCaps);
          addActiveState(e.key);
          isCapsOn = true;
          break;
        }
        initKeyboard(keys.keyEnCaps);
        addActiveState(e.key);
        isCapsOn = true;
        break;
      }
      break;
    case 'ArrowUp':
      addActiveState(e.key);
      inputKey('↑');
      break;
    case 'ArrowLeft':
      addActiveState(e.key);
      inputKey('←');
      break;
    case 'ArrowRight':
      addActiveState(e.key);
      inputKey('→');
      break;
    case 'ArrowDown':
      addActiveState(e.key);
      inputKey('↓');
      break;
    default:
      if (e.shiftKey) {
        document.querySelector('.keyboard').remove();
        initKeyboard(keys.keyEnPlusShift);
        addActiveState(e.key);
        inputKey(e.key);
        break;
      }
      addActiveState(e.key);
      inputKey(e.key);
      break;
  }
}

function keyUpHandler(e) {
  switch (e.key) {
    case ' ':
      removeActiveState('Space');
      break;
    case 'CapsLock':
      break;
    case 'Meta':
      removeActiveState('Win');
      break;
    case 'Control':
      if (e.code === 'ControlRight') {
        removeActiveState(e.code);
        return;
      }
      removeActiveState(e.key);
      break;
    case 'Alt':
      if (e.code === 'AltRight') {
        removeActiveState(e.code);
        return;
      }
      removeActiveState(e.key);
      break;
    case 'Shift':
      if (e.code === 'ShiftRight') {
        removeActiveState(e.code);
        break;
      }
      removeActiveState(e.key);
      break;
    default:
      if (e.shiftKey) {
        document.querySelector('.keyboard').remove();
        if (!isCapsOn) {
          initKeyboard(keys.keyEn);
          removeActiveState(e.key);
          break;
        }
        if (isCapsOn) {
          initKeyboard(keys.keyEnCaps);
          addActiveState('CapsLock');
          break;
        }
        break;
      }
      removeActiveState(e.key);
      break;
  }
}

function mouseDownHandler(e) {
  if (!e.target.classList.contains('key')) {
    return;
  }
  switch (e.target.innerText) {
    case '__':
      addActiveState('Space');
      inputKey(' ');
      break;
    case 'Tab':
      addActiveState(e.target.innerText);
      inputKey('\t');
      break;
    case 'Backspace':
      addActiveState(e.target.innerText);
      backspace();
      break;
    case 'Enter':
      addActiveState(e.target.innerText);
      inputKey('\n');
      break;
    case 'Win':
      addActiveState('Win');
      break;
    case 'Ctrl':
      if (e.target.id === 'ControlRight' && !isActive(e.target.id)) {
        addActiveState(e.target.id);
        break;
      }
      if (e.target.id === 'ControlRight' && isActive(e.target.id)) {
        removeActiveState(e.target.id);
        break;
      }
      if (isActive(e.target.id)) {
        removeActiveState(e.target.id);
        break;
      }
      if (!isActive(e.target.id)) {
        addActiveState(e.target.id);
        break;
      }
      break;
    case 'Alt':
      if (e.target.id === 'AltRight' && !isActive(e.target.id)) {
        addActiveState(e.target.id);
        isAltOn = true;
        break;
      }
      if (e.target.id === 'AltRight' && isActive(e.target.id)) {
        removeActiveState(e.target.id);
        isAltOn = false;
        break;
      }
      if (isActive(e.target.id)) {
        removeActiveState(e.target.id);
        isAltOn = false;
        break;
      }
      if (!isActive(e.target.id)) {
        addActiveState(e.target.id);
        isAltOn = true;
        break;
      }
      break;
    case 'Shift':
      if (e.target.id === 'ShiftRight' && !isActive(e.target.id) && isAltOn) {
        changeLanguage();
        document.querySelector('.keyboard').remove();
        initKeyboard(keys[value]);
        if (isCapsOn) {
          addActiveState('CapsLock');
        }
        isAltOn = false;
        break;
      }
      if (e.target.id === 'ShiftRight' && isActive(e.target.id)) {
        removeActiveState(e.target.id);
        break;
      }
      if (e.target.id === 'ShiftRight' && !isActive(e.target.id)) {
        addActiveState(e.target.id);
        break;
      }
      if (!isActive(e.target.innerText) && isAltOn) {
        changeLanguage();
        document.querySelector('.keyboard').remove();
        initKeyboard(keys[value]);
        if (isCapsOn) {
          addActiveState('CapsLock');
        }
        isAltOn = false;
        break;
      }
      if (isActive(e.target.innerText)) {
        removeActiveState(e.target.innerText);
        break;
      }
      if (!isActive(e.target.innerText)) {
        addActiveState(e.target.innerText);
        break;
      }
      break;
    case 'CapsLock':
      if (isActive(e.target.id)) {
        document.querySelector('.keyboard').remove();
        if (value === 'keyRu') {
          initKeyboard(keys.keyRu);
          removeActiveState(e.target.id);
          isCapsOn = false;
          break;
        }
        initKeyboard(keys.keyEn);
        removeActiveState(e.target.id);
        isCapsOn = false;
        break;
      }
      if (!isActive(e.target.id)) {
        document.querySelector('.keyboard').remove();
        if (value === 'keyRu') {
          initKeyboard(keys.keyRuCaps);
          addActiveState(e.target.id);
          isCapsOn = true;
          break;
        }
        initKeyboard(keys.keyEnCaps);
        addActiveState(e.target.id);
        isCapsOn = true;
        break;
      }
      break;
    case '↑':
      addActiveState('ArrowUp');
      inputKey('↑');
      break;
    case '←':
      addActiveState('ArrowLeft');
      inputKey('←');
      break;
    case '→':
      addActiveState('ArrowRight');
      inputKey('→');
      break;
    case '↓':
      addActiveState('ArrowDown');
      inputKey('↓');
      break;
    default:
      addActiveState(e.target.innerText);
      inputKey(e.target.innerText);
      break;
  }
}

function mouseUpHandler(e) {
  switch (e.target.innerText) {
    case '__':
      removeActiveState('Space');
      break;

    case 'Win':
      removeActiveState('Win');
      break;

    case 'Tab':
      removeActiveState('Tab');
      break;

    case 'Alt':
      if (e.target.id === 'AltRight') {
        break;
      }
      break;
    case 'Ctrl':
      if (e.target.id === 'ControlRight') {
        break;
      }
      break;

    case 'Shift':
      if (e.target.id === 'ShiftRight') {
        break;
      }
      break;

    case 'CapsLock':
      break;

    case '↑':
      removeActiveState('ArrowUp');
      break;

    case '←':
      removeActiveState('ArrowLeft');
      break;

    case '→':
      removeActiveState('ArrowRight');
      break;

    case '↓':
      removeActiveState('ArrowDown');
      break;

    default:
      removeActiveState(e.target.innerText);
      break;
  }
}

document.body.addEventListener('keydown', (e) => keyDownHandler(e));
document.body.addEventListener('keyup', (e) => keyUpHandler(e));
document.body.addEventListener('mousedown', (e) => mouseDownHandler(e));
document.body.addEventListener('mouseup', (e) => mouseUpHandler(e));
