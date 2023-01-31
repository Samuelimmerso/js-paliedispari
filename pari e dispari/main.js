// declaration
let inputN = document.getElementById("number");
let even = document.getElementById("even");
let odd = document.getElementById("odd");
let print = document.getElementById("print");


// click even
even.addEventListener("click",
    function () {
        let numbersSum = sum(generateRandomNumber(1, 5), parseInt(inputN.value)); // sum a random number + the value in input

        if (isEven(numbersSum)) {           // if the sum of the numbers is even
            console.log(numbersSum);        // print the sum
            console.log("Hai Vinto");
        } else {
            console.log(numbersSum);
            console.log("Hai Perso");
        }
    }
);



// click odd
odd.addEventListener("click",
    function () {
        let numbersSum = sum(generateRandomNumber(1, 5), parseInt(inputN.value)); // sum a random number + the value in input

        if (isOdd(numbersSum)) {            // if the sum of the numbers is odd
            console.log(numbersSum);        // print the sum
            console.log("Hai Vinto");
        } else {
            console.log(numbersSum);
            console.log("Hai Perso");
        }
    }
);







//FUNCTIONS

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }

    return false;
}

function isOdd(num) {
    if (num % 2 != 0) {
        return true;
    }

    return false;
}

function sum(num1, num2) {
    return num1 + num2;
}

function generateRandomNumber(min, max) {
    let N = Math.floor(Math.random() * max) + min;
    return N;
}