const navbar = document.querySelector(".navbar");
const trigger = document.querySelector("#trigger");

const observer = new IntersectionObserver(
    ([e]) => {
        navbar.classList.toggle("stuck", !e.isIntersecting);
    },
    { threshold: 0.1 }
);

observer.observe(trigger);