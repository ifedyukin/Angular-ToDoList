export function getLocalStorage() {
    return JSON.parse(localStorage.getItem("Items"));
}

export function setLocalStorage(items) {
    localStorage.setItem("Items", JSON.stringify(items));
}