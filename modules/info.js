import products from "./products.js";

let id = localStorage.getItem('id');

const info = document.getElementById('info');
const content = document.getElementById('content');

content.innerHTML = products[0].info;