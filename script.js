const burger = document.querySelector(".burger");
const div1 = document.querySelector(".menu");
burger.addEventListener("click", () => {
    div1.style.display = "block";
    burger.style.display = "none";
});

const bouton = document.querySelector(".button");
const div = document.querySelector(".menu");
bouton.addEventListener("click", () => {
    div.style.display = "none";
    burger.style.display = "block";
});
