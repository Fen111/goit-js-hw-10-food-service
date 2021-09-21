import dishCard from '../templates/card-dishes.hbs';
import menuItem from './menu.json';

function createDishCardsMarkup(menuItem) {
  return menuItem.map(dish => dishCard(dish)).join('');
}

const menu = document.querySelector('ul.js-menu');
const menuMarkup = createDishCardsMarkup(menuItem);

menuMarkup.insertAdjacentHTML('beforeend', menuMarkup);
