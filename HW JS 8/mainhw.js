'use strict'
    const form = document.getElementById('price_holder');

    form.onfocus = function () {
        this.style.outlineColor = 'green';
    }

    form.onblur = function () {
        if (form.value < 0 ) {
            this.style.borderColor = 'red';

            let spanError = document.createElement('span');
            spanError.innerText = `Please enter correct price`;
            document.body.append(spanError);
        } else {
            this.style.color = 'green';

            const button = document.createElement('button');
            button.classList.add('button');
            const text = document.createTextNode('X');
            button.appendChild(text);
            document.body.prepend(button);

            let spanPrice = document.createElement('span');
            spanPrice.classList.add('span_price');
            spanPrice.innerText = `Текущая цена: ${form.value}`;
            document.body.prepend(spanPrice);

            button.onclick = function () {
                button.style.display = 'none';
                spanPrice.style.display = 'none';
                form.value = '';
            }
        }
    }


