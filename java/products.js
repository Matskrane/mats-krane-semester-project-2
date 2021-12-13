import { url_products } from './components/api.js';

const productsList = document.querySelector(".products")
const searchBar = document.getElementById('searchBar');
let preWorkOuts = [];



searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = preWorkOuts.filter( product => {
        return ( product.title.toLowerCase().includes(searchString)
        );
    });
    listProducts(filteredProducts);
});





const getProducts = async () => {
    try {
        const response = await fetch(url_products);
        preWorkOuts = await response.json();
        console.log(preWorkOuts);
        listProducts(preWorkOuts);

    } catch (err) {
    console.error(err);
    }
};





const listProducts = (products) => {
    
    const htmlString = products
        .map((product) => {
            return `
            <div class="product">
            <a href="specificProduct.html?id=${product.id}">
            <div class="product-card">

                <div class="left-side">
                    <img src="${product.image_url}"> 
                </div>
            </a>

                <div class="right-side">   
                    <h3>${product.title}</h3>
                    <span>${product.price} kr</span>
                    <button 
                        class="button-62"
                        id="addFavorite"
                        data-title="${product.title}"
                        data-price="${product.price}"
                        data-image_url="${product.image_url}"
                    >Quick add</button>                              
                </div>

            </div>
            
            </div>
        `;
        })
        .join('');
    productsList.innerHTML = htmlString;

    
    const addFavoriteButton = document.querySelectorAll(".product button");

    addFavoriteButton.forEach((button) => {
        button.addEventListener("click", addToLocalStorage);
    });


function addToLocalStorage() {

    this.classList.toggle("added")
        
    const image_url = this.dataset.image_url;
    const title = this.dataset.title;
    const price = this.dataset.price;
    

    const currentFavorites = getAddedFavorites();

    const favoriteExists = currentFavorites.find(function (product) {
            return product.title === title;
    });
    
    if (favoriteExists === undefined) {
        const product = { title: title, price: price, image_url: image_url };
        currentFavorites.push(product);
        saveFavorites(currentFavorites);
        alert("Successfully added to cart");
    } else {
        const newFavorites = currentFavorites.filter((product) => product.title !== title);
        saveFavorites(newFavorites);
        alert("Product removed from cart");
    }
  }
};






function getAddedFavorites() {
    const favorites = localStorage.getItem("favorites");

    if (favorites === null) {
        return [];
    } else {
        return JSON.parse(favorites);
    }
}

function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}



getProducts();




