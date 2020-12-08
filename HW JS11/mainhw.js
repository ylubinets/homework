"use strict";

let button = document.querySelectorAll(".btn");

document.addEventListener("keydown", function (e) {
    button.forEach((item) => {
        if (e.key.toUpperCase() === item.dataset.name.toUpperCase()) {
            item.classList.add("color");
        } else {
            item.classList.remove("color");
        }
    });
});



