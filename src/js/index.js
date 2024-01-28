const button = document.querySelector(".btn-plataform");
const platformElement = document.querySelector(".btn-plataform .platforms");

button.addEventListener("click", () => {
    platformElement.classList.toggle("active")
});