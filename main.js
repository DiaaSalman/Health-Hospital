let toTop = document.getElementById("to-top");

window.onscroll = function () {
    if (scrollY >= 500) {
        toTop.style.bottom = "15px";
    }else{ 
        toTop.style.bottom = "-50px";
    }
}

/* Manage Nav Bar */

let overlay = document.querySelector(".overlay");
let menuIcon = document.querySelector(".menu-icon");
let closeBtn = document.querySelector(".close");

menuIcon.onclick = function () {
    overlay.style.right = "0";
}
closeBtn.onclick = function () {
    overlay.style.right = "-100%";
}

