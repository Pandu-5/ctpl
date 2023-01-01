
function myFunction() {
    var x = document.getElementById("header-content");
    if (x.style.display === "none") {
        x.style.display = "flex";
        x.style.transition = "all 3.5s ease-in-out";
    } else {
        x.style.display = "none";
    }
}

const navBar = document.querySelector(".nav"),
    menuBtns = document.querySelectorAll(".menu-icon"),
    overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
});