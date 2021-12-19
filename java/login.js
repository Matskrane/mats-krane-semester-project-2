import { saveJWT, saveUser } from "./components/loginLocalStorage.js";
import { basicUrl } from "./components/api.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const failedLogin = document.querySelector(".failed-login");

form.addEventListener("submit", logIn);

function logIn(event) {
    event.preventDefault();

    failedLogin.innerHTML = "";

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
        return showError("warning", "Invalid values", ".failed-login");
    }
    doLogin(usernameValue, passwordValue);
};

async function doLogin(username, password) {
    const url = basicUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.user) {
           
            saveJWT(json.jwt);
            saveUser(json.user);

            location.href = "admin.html";
        }

        if (json.error) {
            showError("warning", "Password/Username is incorrect", ".failed-login" );
        }
        console.log(json);
    } catch (error) {
        console.log(error);
  };
};



function showError(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="status ${messageType}">${message}</div>`;
};