

export function listProducts (product) {
    const postProducts = document.querySelector(".products");
    
    product.forEach(function(product) {
    postProducts.innerHTML += `
    <div class="product">
        <div class="product-card">
            <div class="left-side">
                <img src="${product.image_url}"> 
            </div>
            <div class="right-side">   
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <h3>${product.description}</h3>
            </div>
        </div> 
    </div>
    
    `;
  })
}




//const image = document.createElement('img')
//image.setAttribute('src', api_url + product.image.formats.small.url)
//postProducts.appendChild(image)