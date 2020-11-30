'use strict'
    const form = document.getElementById('price_holder');
    const spanError = document.getElementById('span-error');
    const button = document.querySelector('button');
    const spanPrice = document.getElementById('span-price');

    form.addEventListener('focus', () => {
        form.style.outlineColor = 'green';
    })

    function priceSpan () {
        form.classList.add('green-border');

        button.style.display = 'inline';

        spanPrice.style.display = 'inline';
        spanPrice.innerText = `Текущая цена: ${form.value}`;
        document.body.prepend(spanPrice);
    }
     form.addEventListener('blur', priceSpan );

    function errorSpan () {
        if ( form.value < 0) {
            spanError.style.display = 'inline';
            spanPrice.style.display = 'none';
        }
    }
    form.addEventListener('blur', errorSpan);

    function buttonClick () {
        button.style.display = 'none';
        spanPrice.style.display = 'none';
        spanError.style.display = 'none';
        form.value = '';
    }

    button.addEventListener('click', buttonClick);
