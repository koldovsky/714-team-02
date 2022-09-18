const burgerIcon = document.querySelector(".burger__menu-icon");
const body = document.body;
const headerTopbar = document.querySelector(".header__topbar");

//CSS class, that forces styles to change when being added
const burgerToggleClassName = "burger-active";

burgerIcon.addEventListener("click", () => {
    body.classList.toggle(burgerToggleClassName);
    headerTopbar.classList.toggle(burgerToggleClassName);
});