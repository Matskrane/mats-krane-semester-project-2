import { url_products, url_banner } from './components/api.js';
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

getProducts();