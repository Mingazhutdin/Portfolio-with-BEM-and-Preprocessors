const burgerInp = document.querySelector("#burger");
const burgerBtn = document.querySelector(".burger__btn");
const burgerNav = document.querySelector(".burger__nav")
const burgerLinks = document.querySelectorAll(".burger__link");


burgerBtn.addEventListener("click", () => {
    if (burgerInp.checked) {
        burgerNav.style.paddingTop = "0";
        burgerNav.style.height = '0';
    } else {
        burgerNav.style.paddingTop = "60px";
        burgerNav.style.height = '428px';
    }

})

for (const link of burgerLinks) {
    link.addEventListener("click", () => {

        burgerInp.checked = false
        burgerNav.style.paddingTop = "0";
        burgerNav.style.height = '0';
    })
}
