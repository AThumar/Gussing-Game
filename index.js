let Guess = parseInt(prompt("Enter a number"));


let random = Math.floor(Math.random() * 5);

while (!Guess) {
    Guess = parseInt(prompt("Enter a number"));
}

while (Guess !== random) {

    if (Guess > random) {
        Guess = parseInt(prompt('Guess is HIGHER , Please enter another number'));

    }
    else {
        Guess = parseInt(prompt('Guess is LOWER , Please enter another number'));
    }




}
console.log("YOU GOT IT");
