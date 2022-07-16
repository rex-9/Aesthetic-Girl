import products from "./products.js";

let id = localStorage.getItem('id');

const info = document.getElementById('info');
const content = document.getElementById('content');

console.log(products[0].info);
content.innerHTML = products[0].info;