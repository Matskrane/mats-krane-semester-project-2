const jwtKey = "jwt";
const userKey = "user";

export function saveJWT(jwt) {
    saveLocalStorage(jwtKey, jwt);
};

export function getJWT() {
    return getLocalStorage(jwtKey);
};

export function saveUser(user) {
    saveLocalStorage(userKey, user);
};

export function getUsername() {
    const user = getLocalStorage(userKey);

    if (user) {
        return user.username;
    }

    return null;
};




function saveLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

function getLocalStorage(key) {
    const value = localStorage.getItem(key);

    if (!value) {
        return [];
    }
    return JSON.parse(value);
};


export function showError(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div class="status ${messageType}">${message}</div>`;
};