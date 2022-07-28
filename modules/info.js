import {
    products
} from "./models.js";

let id = localStorage.getItem('id');
const demo = document.getElementById('demo');
demo.href = products[id-1].demo;

let index = 0;
const imageContainer = document.getElementById('image-container');

imageContainer.innerHTML = `
    <img id="display-img" class="md:w-2/3 rounded-lg border-4" src=".${products[id-1].img[index]}" alt="">
    <div class="flex justify-center gap-4 items-center">
        <span id="prev" class="w-1/5 h-20 md:h-36 p-2 bg-pink-200 rounded-lg cursor-pointer">
            <img id="prev-img" class="rounded-lg" src=".${products[id-1].img[index-1]}" alt="">
        </span>
        <img id="current-img" class="w-1/4 rounded-lg border-4" src=".${products[id-1].img[index]}" alt="">
        <span id="next" class="w-1/5 h-20 md:h-36 p-2 bg-pink-200 rounded-lg cursor-pointer">
            <img id="next-img" class="rounded-lg" src=".${products[id-1].img[index+1]}" alt="">
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
        displayImg.src = `.${products[id - 1].img[index]}`;
        prevImg.src = `.${products[id - 1].img[index - 1]}`;
        currentImg.src = `.${products[id - 1].img[index]}`;
        nextImg.src = `.${products[id - 1].img[index + 1]}`;
    } else {
        console.log(index);
    }
};

next.onclick = () => {
    if (index < products[id - 1].img.length - 1) {
        index++;
        displayImg.src = `.${products[id - 1].img[index]}`;
        prevImg.src = `.${products[id - 1].img[index - 1]}`;
        currentImg.src = `.${products[id - 1].img[index]}`;
        nextImg.src = `.${products[id - 1].img[index + 1]}`;
    } else {
        console.log(index);
    }
};