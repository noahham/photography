document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon-holder");
    const closeIcon = document.querySelector(".x-holder");
    const slidingMenu = document.getElementById("sliding-menu");

    menuIcon.addEventListener("click", function () {
        slidingMenu.style.transform = "translateX(0)";
    });

    closeIcon.addEventListener("click", function () {
        slidingMenu.style.transform = "translateX(200px)";
    });
});