'use strict'

    function renderList (items, parent) {

    const elements = items.map( item => {
        const liElem = document.createElement('li');
        liElem.textContent = item;

        return liElem;
    })
    const ulElem = document.createElement('ul');
    ulElem.append(...elements);

    if(parent){
        parent.append(ulElem);
    } else {
        document.body.append(ulElem);
    }
}

renderList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]);
