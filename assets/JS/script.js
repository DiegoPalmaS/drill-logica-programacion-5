//function to validate the input
function validateInput() {
    // Get the input value
    const input = document.getElementById('guessInput').value;
    // Check if the input is number between 1 and 100
    if (isNaN(input) || input < 1 || input > 100 || input%1 !== 0) {
        return false;
    } else {
        return true;
    }
}
//function to select a random number between 1 and 100
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
//function to check if the guess is correct
function checkGuess(input, randomNumber) {
    if (input < randomNumber) {
        return "too low!";
    } else if (input > randomNumber) {
        return "too high!";
    } else {
        return "correct!";
    }
}


//global variables
let randomNumber = getRandomNumber();
let count = 1;
//function to handle the main logic of the game
function main(){
    //Get the input value
    const input = document.getElementById('guessInput').value;
    //Validate the input
    if (validateInput()){
        //Check if the guess is correct
        const result = checkGuess(input, randomNumber);
        //Display the result
        document.getElementById('result').innerHTML += `Try ${count}: ${input} is ${result}.<br>`;
        //Increment the count
        count++;
        //If the guess is correct, generate a new random number
        if (result === "correct!") {
            randomNumber = getRandomNumber();
            count--;
            //Reset the input field and result display
            document.getElementById('guessInput').value = '';
            //Clear the result display
            document.getElementById('result').innerHTML = '';
            //Display a congratulatory message
            Swal.fire({
                title: "You Win!",
                text: `Congratulations! ${input} is correct! You guessed it in ${count} tries.`,
                icon: "success"
            });
            //alert(`Congratulations! ${input} is correct! You guessed it in ${count} tries.`);
            // Reset the count for the new game
            count = 1;
        }
    } else {
        //Display an error message if the input is invalid
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Please enter a valid number between 1 and 100.",
        });
    }
}


