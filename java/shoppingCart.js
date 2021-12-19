import { getAddedProducts, saveProducts, removeFromCart  } from "./components/localStorage.js";

const displayProducts = document.querySelector(".added-products");



const products = getAddedProducts();

function addedProducts () {
products.forEach((product) => {
    displayProducts.innerHTML += `
    <div class="cart-container">
            <div class="shopping-card">
            <div class="shopping-cart-l">
                <img src="${product.image_url}" alt="preworkout box"> 
            </div>

            <div class="shopping-cart-r">   
                <h3>${product.title}</h3>
                <span>${product.price} kr</span>
                <button
                id="addFavorite"
                data-title="${product.title}"
                data-price="${product.price}"
                data-image_url="${product.image_url}"
                >Remove</button>                                         
            </div>                       
            </div>                        
    </div>
`;
});

const addToCartButton = document.querySelectorAll(".cart-container button");

    addToCartButton.forEach((button) => {
        button.addEventListener("click", removeFromCart);
    });

  removeFromCart();
  getAddedProducts();
  saveProducts();
}

addedProducts();

console.log(products)


if(!localStorage.products) alert("No products added yet!")




