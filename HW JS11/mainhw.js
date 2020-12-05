"use strict";

const wrapper = document.querySelectorAll('.btn-wrapper .btn');

document.addEventListener('keydown', function (event) {
    wrapper.forEach(function (item) {
            if (event.key === item.innerHTML.toLowerCase()) {
                return item.style.backgroundColor = 'darkblue';
            } else {
                item.removeAttribute('style');
            }
            if (event.key === wrapper[0].innerHTML) {
                wrapper[0].style.backgroundColor = 'darkblue';
            } else {
                item.removeAttribute('style');
            }
        }
    );
})


