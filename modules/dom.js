import products from './products.js';

const select = (type) => {
    if (type !== "All Items") {
        let selectedProducts = products.filter((product) => product.type === type);
        let productsToHide = products.filter((product) => product.type !== type);
        selectedProducts.forEach(product => {
            const element = document.getElementById(product.id);
            element.classList.add('block');
            element.classList.remove('hidden');
            console.log(element);
        })
        productsToHide.forEach(product => {
            const element = document.getElementById(product.id);
            element.classList.add('hidden');
            element.classList.remove('block');
            console.log(element);
        })
    } else {
        products.forEach(product => {
            const element = document.getElementById(product.id);
            element.classList.add('block');
            element.classList.remove('hidden');
            console.log(element);
        })
    }
}

const cardContainer = document.getElementById('card-container');
const loadCards = () => {
    products.forEach(product => {
        const card = document.createElement('div');
        card.id = product.id;
        card.classList.add('bg-white', 'rounded-lg', 'm-2', 'cursor-pointer', 'shadow-lg', 'hover:shadow-pink-500/40', 'hover:ease-linear', 'hover:duration-500', 'hover:scale-105')
        card.innerHTML = `<a href="./pages/info.html" class='relative'>
                            <img src='${product.img}' class='z-0 object-cover w-56 h-40 rounded-t-lg'>
                            <p class="text-center text-lg font-bold pt-1 w-56">
                               ${product.id}. ${product.name}
                            </p>
                            <div class="flex justify-between items-start px-2 pb-1">
                                <p class="text-green-500 font-bold">
                                    ${product.price} kyats
                                </p>                                    
                                <p class="text-pink-500 font-bold">
                                    ${product.count} instock
                                </p>
                            </div>
                        </a>`
        card.onclick = () => {
            localStorage.setItem('id', product.id)
        }
        cardContainer.appendChild(card);
    });
}

export {
    loadCards,
    select
};