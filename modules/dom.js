import products from './products.js';

const cardContainer = document.getElementById('card-container');
const loadCards = () => {
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('bg-white', 'rounded-lg', 'm-2', 'cursor-pointer', 'shadow-lg', 'hover:shadow-blue-500/40', 'hover:ease-linear', 'hover:duration-500', 'hover:scale-105')
        card.innerHTML = `<a href="./pages/info.html">
                            <img src='${product.img}' class='object-cover w-56 h-40 rounded-t-lg'>  
                            <p class="text-center font-bold mt-1 w-56">
                                ${product.name}
                            </p>
                            <div class="flex justify-between items-start px-2 pb-1">
                                <p class="text-green-500 font-bold">
                                    ${product.price} MMK
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

export default loadCards;