import {
    products
} from "./models.js";

let id = localStorage.getItem('id');
const body = document.querySelector('body');

body.innerHTML = `
<div id="image-container" class="w-1/2 h-screen flex flex-col items-center justify-center gap-6">
    <!-- Display Images -->
</div>
<div id="content" class="w-1/2 flex flex-col items-start pt-24 px-6">
    <h1 class="mb-4 text-center w-full text-3xl font-bold">Ipad Pouch</h1>
    <p class="mb-4">Specification onaji na wo kazoete bokura wa bokuno kimi ga deaeta kononi onaji na wo kazoete
        bokura wa bokuno kimi ga deaeta kononi onaji na wo kazoete bokura wa bokuno kimi ga deaeta kononi onaji na
        wo kazoete bokura wa bokuno kimi ga deaeta kononi onaji na wo kazoete bokura wa bokuno kimi ga deaeta kononi
    </p>
    <p class="mb-4 text-lg font-bold">Size: 60x40</p>
    <p class="mb-4 text-lg font-bold">Price: 1000 MMK</p>
    <p class="mb-4 text-lg font-bold">Instock: 25</p>
    <div class="flex w-full items-center justify-between mt-5">
        <div class="w-full text-center">
            <a class="mb-4 text-lg font-bold inline-block bg-green-500 text-white px-2 py-1 rounded-lg hover:scale-125 focus:bg-green-200 focus:text-black"
                href="https://www.youtube.com">Preorder</a>
        </div>
        <div class="w-full text-center">
            <a class="mb-4 text-lg font-bold inline-block bg-pink-500 text-white px-2 py-1 rounded-lg hover:scale-125 focus:bg-pink-200 focus:text-black"
                href="https://www.youtube.com">Demo</a>
        </div>
    </div>
</div>`;

let index = 0;
const imageContainer = document.getElementById('image-container');

imageContainer.innerHTML = `
    <img id="display-img" class="w-2/3 rounded-lg border-4" src="${products[id-1].img[index]}" alt="">
    <div class="flex justify-center gap-4 items-center">
        <span id="prev" class="w-1/5 h-36 p-2 bg-pink-200 rounded-lg cursor-pointer">
            <img id="prev-img" class="rounded-lg" src=${products[id-1].img[index-1]} alt="">
        </span>
        <img id="current-img" class="w-1/4 rounded-lg border-4" src=${products[id-1].img[index]} alt="">
        <span id="next" class="w-1/5 h-36 p-2 bg-pink-200 rounded-lg cursor-pointer">
            <img id="next-img" class="rounded-lg" src=${products[id-1].img[index+1]} alt="">
        </span>
    </div>`

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const displayImg = document.getElementById('display-img');
const prevImg = document.getElementById('prev-img');
const currentImg = document.getElementById('current-img');
const nextImg = document.getElementById('next-img');

prev.onclick = () => {
    if (index > 0) {
        index--;
        displayImg.src = products[id - 1].img[index];
        prevImg.src = products[id - 1].img[index - 1];
        currentImg.src = products[id - 1].img[index];
        nextImg.src = products[id - 1].img[index + 1];
    } else {
        console.log(index);
    }
};

next.onclick = () => {
    if (index < products[id - 1].img.length - 1) {
        index++;
        displayImg.src = products[id - 1].img[index];
        prevImg.src = products[id - 1].img[index - 1];
        currentImg.src = products[id - 1].img[index];
        nextImg.src = products[id - 1].img[index + 1];
    } else {
        console.log(index);
    }
};