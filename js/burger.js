(function() {
    const body = document.body;
    const burgerIcon = document.querySelector(".burger__menu-icon");
    const headerTopbar = document.querySelector(".header__topbar");
    //CSS class, that forces styles to change when being added
    const burgerToggleClassName = "burger-active";

    function toggleBurgerMenu() {
        body.classList.toggle(burgerToggleClassName);
        headerTopbar.classList.toggle(burgerToggleClassName);
    }

    burgerIcon.addEventListener("click", toggleBurgerMenu);
})();