

// Adds and removes from local storage

export function addToLocalStorage() {

    this.classList.toggle("added")
        
    const image_url = this.dataset.image_url;
    const title = this.dataset.title;
    const price = this.dataset.price;
    

    const currentProducts = getAddedProducts();

    const productExists = currentProducts.find(function (product) {
            return product.title === title;
    });
    
    if (productExists === undefined) {
        const product = { title: title, price: price, image_url: image_url };
        currentProducts.push(product);
        saveProducts(currentProducts);
        alert("Successfully added to cart");
    } else {
        const newProducts = currentProducts.filter((product) => product.title !== title);
        saveProducts(newProducts);
        alert("Product removed from cart");
    }
}


export function getAddedProducts() {
    const products = localStorage.getItem("products");

    if (products === null) {
        return [];
    } else {
        return JSON.parse(products);
    }
}

export function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}




export function removeFromCart() {
        
    const image_url = this.dataset.image_url;
    const title = this.dataset.title;
    const price = this.dataset.price;
    

    const currentProducts = getAddedProducts();

    const productExists = currentProducts.find(function (product) {
            return product.title === title;
    });
    
    if (productExists === undefined) {
        const product = { title: title, price: price, image_url: image_url };
        currentProducts.push(product);
        saveProducts(currentProducts);
        alert("Successfully added to cart");
    } else {
        const newProducts = currentProducts.filter((product) => product.title !== title);
        saveProducts(newProducts);
        alert("Product removed from cart");
    }
}

