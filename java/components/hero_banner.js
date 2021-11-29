


export function listBanner (banner) {
    const hero_banner = document.querySelector(".hero-banner");
    
    hero_banner.innerHTML += `

    <img src="${banner.hero_banner_alt_text}"</img>

    <div class="centered">
        <h2>Swole is the goal <br> size is the price</h2>
        <div class="button-showcase">
            <button type="button">Shop Now!</button>
        </div>
    </div>

    `;
}