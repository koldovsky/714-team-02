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

    //hides burger if it is active and page is scrolled down
    function hideBurgerAfterScroll() {
        const isBurgerActive = body.classList.contains(burgerToggleClassName);
        const currentScroll = document.documentElement.scrollTop || body.scrollTop;

        if(isBurgerActive && currentScroll > 0){
            body.classList.remove(burgerToggleClassName);
            headerTopbar.classList.remove(burgerToggleClassName);
        }
    }

    burgerIcon.addEventListener("click", toggleBurgerMenu);
    window.addEventListener("scroll", hideBurgerAfterScroll);
})();