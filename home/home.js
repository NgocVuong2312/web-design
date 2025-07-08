document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');

    // Chỉ gán sự kiện nếu tồn tại toggle và menu
    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("close");
            toggle.classList.toggle("rotated");
        });
        function handleResponsive() {
            if (window.innerWidth <= 757) {
                menu.classList.add("close");
                toggle.classList.add("rotated");
            } else {
                menu.classList.remove("close");
                toggle.classList.remove("rotated");
            }
        }

        window.addEventListener("resize", handleResponsive);
        handleResponsive();
    }
});
