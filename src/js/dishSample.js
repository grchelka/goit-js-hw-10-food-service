import dishSamples from './menu.json';
import compiledTemplate from '../templates/dish-card.handlebars';

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuCardsMarkup(dishSamples);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuCardsMarkup (items) {
    return items.map(compiledTemplate).join('');
}