'use strict'

document.addEventListener('DOMContentLoaded', content);


const btn = document.querySelector('.button');
const body = document.getElementsByTagName('body');

     function content () {
        if (localStorage.getItem('bgcolor') === 'salmon') {
            body[0].classList.toggle('salmon');
        } else {
            body[0].classList.remove('salmon')
        }
    }

    btn.addEventListener('click', () => {
        body[0].classList.toggle('salmon');

        if (body[0].classList.contains('salmon')){
            localStorage.setItem('bgcolor', 'salmon');
        } else {
            localStorage.setItem('bgcolor', 'white')
        }
    })

