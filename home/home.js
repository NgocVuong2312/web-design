document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("close");
        });
    }
});