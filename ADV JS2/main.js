const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];

 const root = document.getElementById('root');
 const list = document.createElement('ul');

function booksShow(arr) {

    const root = document.getElementById('root');
    const list = document.createElement('ul');

     function createElem (item, index){
        const {author, name, price} = item;

            if (!author) {
                throw new Error(`Author missed: №${index + 1}`);
            } else if (!name) {
                throw new Error(`Name missed:  №${index + 1}`);
            } else if (!price) {
                throw new Error(`Price missed: №${index + 1}`);
            }
            const liList = document.createElement('li');
            list.append(liList);
            liList.innerText = (`Author: ${author}, Name: ${name}, Price: ${price}`);
            return liList;
     }
    arr.forEach((item, index) => {
        try {
            const listElement = createElem(item, index);
            list.append(listElement);
        } catch (Error) {
            console.log(Error);
        }
    });
    return root.append(list);
}

    booksShow(books);