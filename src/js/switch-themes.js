import { theme } from './collection-theme';

const { LIGHT, DARK } = theme;

const checkbox = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', changeTheme);

function changeTheme() {
  //   body.classList.toggle(DARK);

  //   if (body.className === '') {
  //     body.classList.add(LIGHT);
  //   } else {
  //     body.classList.remove(LIGHT);
  //   }

  if (checkbox.checked) {
    body.classList.add(DARK);
    body.classList.remove(LIGHT);
  } else {
    body.classList.add(LIGHT);
    body.classList.remove(DARK);
  }

  localStorage.setItem('theme', body.className);
  localStorage.setItem('checked', JSON.stringify(checkbox.checked));
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.className = savedTheme;
  }
}

function currentConditionInput() {
  const checkedInput = localStorage.getItem('checked');
  const parseCheckedInput = JSON.parse(checkedInput);
  checkbox.checked = parseCheckedInput;
}

currentConditionInput();
currentTheme();
