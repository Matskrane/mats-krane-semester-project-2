import { url_products } from "./components/api.js";
import { getJWT, showError } from "./components/loginLocalStorage.js";

const displayMessage = document.querySelector(".display-status");
const form = document.querySelector("form");
const title = document.querySelector(".title");
const price = document.querySelector(".price");
const description = document.querySelector(".description");
const image_url = document.querySelector(".image-url")



form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    displayMessage.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const image_urlValue = image_url.value.trim();
    const descriptionValue = description.value.trim();

    if (titleValue.length === 0 || 
        priceValue.length === 0 || 
        isNaN(priceValue) ||
        image_urlValue.length === 0 ||
        descriptionValue.length === 0) {
        return showError("warning", "Incorrect values", ".display-status");
    }

    createProduct(titleValue, priceValue, image_urlValue, descriptionValue);
}



async function createProduct(title, price, image_url, description) {

    const data = JSON.stringify({ title: title, price: price, image_url: image_url, description: description });

    const token = getJWT();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url_products, options);
        const json = await response.json();

        if (json.created_at) {
            showError("success", "Product created", ".display-status");
            form.reset();
        }

        if (json.error) {
            showError("error", json.displayMessage, ".display-status");
        }

        console.log(json);
    } catch (error) {
        console.log(error);
        showError("error", "An error occured", ".display-status");
    }
}