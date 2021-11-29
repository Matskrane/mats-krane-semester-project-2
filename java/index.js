import { url_products, url_banner } from './components/api.js';
import { listBanner } from './components/hero_banner.js';
import { listProducts } from './components/products.js';




async function getProducts () {
    try {
        const response = await fetch(url_products);
        const product = await response.json();
        console.log(product);

        listProducts(product);

    }

    catch(error){
        console.log(error);
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

getBanner()