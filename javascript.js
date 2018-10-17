var toGuess = 6;

//read in a number
var userInput = prompt('Please enter a number between 1 - 10', "");
//convert string to number

var usersGuess = parseInt(userInput);

     if (toGuess == usersGuess) {
console.log('You read my memory');
} 
else if (toGuess > usersGuess) {
    console.log('Your guess is lower than my number')}

else if (toGuess < usersGuess) {
    console.log('Your guess is higher than my number')
}



