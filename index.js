import { loadCards, select, options } from './modules/dom.js'

options();

loadCards();

const selector = document.getElementById('selector');

selector.addEventListener('change', (e) => {
    select(selector.value)
});