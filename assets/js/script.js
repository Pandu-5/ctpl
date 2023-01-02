
function myFunction() {
    var x = document.getElementById("header-content");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function myprofFun() {
    var x = document.getElementById("content");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function showinput() {
    var x = document.getElementById("check");
    var y = document.getElementById("checkbtn");
    if (x.style.display === "none") {
        x.style.display = "flex";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "flex";
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
