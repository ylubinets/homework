
let userInput = +prompt('Input number')

    if (userInput < 5) {
        alert ('Sorry no numbers')
    }

    for (let i = 5; i <= userInput; i++ ) {
        if (i % 5 === 0){
            console.log(i)
        }
    }


