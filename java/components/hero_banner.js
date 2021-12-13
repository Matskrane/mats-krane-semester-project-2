


export function listBanner (banner) {
    const hero_banner = document.querySelector(".hero-banner");
    
    hero_banner.innerHTML += `

    

    <div class="thumbnail">
        <img src="${banner.hero_banner_url}"</img>
            <div class="caption">
                <p>Swole is the goal<br>size is the price</p>              
                <div class="button-showcase">                  
                    <button class="button-62"><a href="products.html">Shop Now!</a></button>
                </div>
            </div>
        </div>
    </div>

    `;
}