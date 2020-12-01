function displayList(array, parentDom = document.body) {
    const elements = array.map((item) => {
        return `<li>${item}</li>`;
    });
    parentDom.innerHTML = `<ul>${elements.join(" ")}</ul>`;
}
let arr = ["Одесса", "Киев", "Харьков", "Луцк", "Львов", "Симферополь", "Херсон", "Полтава"];
displayList(arr, document.querySelector('#content'));
