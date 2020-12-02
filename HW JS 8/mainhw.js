'use strict'
    const form = document.getElementById('price_holder');
    const spanError = document.getElementById('span-error');
    const button = document.querySelector('button');
    const spanPrice = document.getElementById('span-price');

    form.addEventListener('focus', () => {
        form.style.outlineColor = 'green';
        form.style.color = 'black';
    })

    function priceSpan () {
        form.classList.add('green-border');

        button.style.display = 'inline';

        spanPrice.style.display = 'inline';
        form.style.color = 'green';
        spanPrice.innerText = `Текущая цена: ${form.value}`;
        spanError.style.display = 'none';
        document.body.prepend(spanPrice);
    }
     form.addEventListener('blur', priceSpan );

    function errorSpan () {
        if ( form.value < 0) {
            spanError.style.display = 'inline';
            form.style.color = 'red';
            spanPrice.style.display = 'none';
            spanError.style.color = 'red';
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
