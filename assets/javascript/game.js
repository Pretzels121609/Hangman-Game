var userName = prompt("Hello! Are you ready to play?")
alert("pick a letter");

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userguess);
}
// Creat an array of words
var words = [
            "bumblebee",
            "daffodil",
            "sunshine",
            "grass",
            "stream"
        ];

//need a function for computer to pick a word
var word = words[Math.floor(Math.random()*words.length)];
    console.log(word);

//display the length of the word to the user
var answerArray=[];

for(var i=0;i<word.length;i++)
    {answerArray[i]="_"     
    }

  var remainingLetters=word.length;

//prompt the user to guess a letter
//show the player thier progress
//if the guess is correct increment correct_guesses by 1
//if the guess is incorrect increment incorrect_guesses by 1 
//if the incorrect_guesses is greater than 8, tell the user they lost and exit the program
//if correct_guesses is equal to the length of the word, tell the user they won
