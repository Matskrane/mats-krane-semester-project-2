const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) {window.location = "specificProduct.html";} 

const url = `http://localhost:5000/products/${id}`;

fetch(url)
.then(response => response.json())
.then(product => {

displayProduct(product);
})

.catch((error) => {
  console.log(error)
});

const output = document.querySelector(".specific-products");
function displayProduct (product) {
    console.log(product);
    const title = product.title;
          
      let html = `
        
      <div class="specific-product">
      <div class="specific-product-card">
          <div class="left-side-v2">
              <img src="${product.image_url}" alt="preworkout box"> 
          </div>
          <div class="right-side-v2">   
              <h3>${product.title}</h3>
              <span>${product.price} kr</span>
              <p>${product.product_description}</p>
              <ul>${product.product_description_specifics}</ul>
              <div>
              <button class="standard-button">Add to cart</button>
              </div>
          </div>
      </div> 
  </div>
      
        `;

      output.innerHTML = html;
      document.title = title;
}