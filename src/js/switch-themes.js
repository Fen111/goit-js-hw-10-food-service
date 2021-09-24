import { theme } from './collection-theme';

const { LIGHT, DARK } = theme;

const checkbox = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', changeTheme);

function changeTheme() {
  body.classList.toggle(DARK);

  !checkbox.checked ? body.classList.add(LIGHT) : body.classList.remove(LIGHT);

  localStorage.setItem('theme', body.className);
}

function currentTheme() {
  const savedTheme = localStorage.getItem('theme') || LIGHT;
  body.className = savedTheme;
  checkbox.checked = savedTheme === DARK;
}

currentTheme();
