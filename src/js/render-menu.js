import dishCards from '../templates/card-dishes.hbs';
import menuItem from './menu.json';

function createDishCardsMarkup(item) {
  return dishCards(item);
}

const menu = document.querySelector('ul.js-menu');
const menuMarkup = createDishCardsMarkup(menuItem);

menu.insertAdjacentHTML('beforeend', menuMarkup);
