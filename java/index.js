import { url_products, url_banner } from './components/api.js';
import { listBanner } from './components/hero_banner.js';
// import { list_Featured_Products } from './components/products.js';


const postProducts = document.querySelector(".featured-section");

async function getProducts () {

    const response = await fetch(url_products);
    const product = await response.json();
    console.log(product);


    const filterIfFeatured = (product) => {
        if (product.featured === true) {
            return true;
        }
    };

    const featured = product.filter(filterIfFeatured)
    console.log(featured)

    for (let i = 0; i < featured.length; i++) {


        if (i === 2) {
          break;
        }
    

    postProducts.innerHTML += `
    

    <div class="featured-products">
    <a href="specificProduct.html?id=${featured[i].id}">
        <div class="image-container">
            <img src="${featured[i].image_url}">
        </div>
        </a>
        <div class="featured-details">
            <p class="first-p">${featured[i].description}</p>
            <h3>${featured[i].title}</h3>
            <h4>${featured[i].price} kr </h4>
            <p>${featured[i].product_description}</p>

            <p><a href="specificProduct.html?id=${featured[i].id}">Learn more</a></p>

        </div>           
    </div>
    `
}
};

getProducts()

async function getBanner () {
    try {
        
        const response_banner = await fetch(url_banner);
        const banner = await response_banner.json();
        console.log(banner);

        listBanner(banner);

        
    }

    catch(error){
        console.log(error);
    }
};

getBanner();

