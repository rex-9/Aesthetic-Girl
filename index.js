import products from './modules/products.js';
import { loadCards, select } from './modules/dom.js'

localStorage.setItem('products', JSON.stringify(products));

loadCards();

const selector = document.getElementById('selector');

selector.addEventListener('change', (e) => {
    select(selector.value)
    e.preventDefault();
});