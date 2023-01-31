// declarations
let check = document.getElementById("check"); //button check
let user_word = document.getElementById("input");   //user's word in input


//click check button
check.addEventListener("click",

    function () {

        if (user_word.value != "") {            // if the input text not is empty
            if (isPalindrome(user_word.value)) {
                console.log(user_word.value + " E' palidroma");
            } else {
                console.log(user_word.value + " non è palidroma");
            }
        } else {   // if the input text is empty
            console.log("Inserisci una parola da verificare.");
        }
    });



function isPalindrome(String) {

    if (String == reverse(String)) {    // if String and the same String reversed is the same return true
        return true;
    } else {
        return false;                   // else false
    }


}

function reverse(String) {              // Reverse the Strings
    const strlen = String.length;
    let reversedString = "";

    for (let i = 1; i <= strlen; i++) {     //assign the String reversed to reversedString
        reversedString += String[strlen - i];
    }

    return reversedString;      //return the String reversed
}