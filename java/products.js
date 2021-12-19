import { url_products } from './components/api.js';
import { addToLocalStorage, getAddedProducts, saveProducts } from './components/localStorage.js';


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


const getImages = "http://localhost:5000";


const listProducts = (products) => {
    
    const htmlString = products
        .map((product) => {
            return `
            <div class="product">
            <a href="specificProduct.html?id=${product.id}">
            <div class="product-card">

                <div class="left-side">
                    <img src="${product.image_url}" alt="preworkout box"> 
                </div>
            </a>

                <div class="right-side">   
                    <h3>${product.title}</h3>
                    <span>${product.price} kr</span>
                    <button 
                        class="standard-button"
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

    
    const addToCartButton = document.querySelectorAll(".product button");

    addToCartButton.forEach((button) => {
        button.addEventListener("click", addToLocalStorage);
    });

  addToLocalStorage();
  getAddedProducts();
  saveProducts();
    
};

getProducts();




