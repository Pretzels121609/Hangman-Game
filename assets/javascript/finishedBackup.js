// var userName = prompt("Hello! What's your name?")
// alert("Hello name. Pick a letter.");

// Create storage container / VARIABLE to hold our game information
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guessedLetters = [];
// Create an array of words
var words = [
    "bumblebee",
    "daffodil",
    "sunshine",
    "grass",
    "bird"
];
var currentWord = "";

// holder the underscores that represent the letters in current word
var underScoreString = [];


// display all INITIAL values for the game information to the user in the html
// get all the html elements by id that will be updated
// update the value of the html text to be the value of the variables created and assigned value to
function gameValues(){
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("guessed-letters").innerHTML = guessedLetters;
}

// call function to run the function so all the information is shown in the html/ page
gameValues();

function getRandomWord(){
    // select a random word from the words array
    // assign the selected word to the word VARIABLE which to begin is an empty string
    // get the total number of words in the words array
    // save the number to a variable i
    var wordsCount = words.length; // 5 - count of words in the words array
    //console.log(wordsCount)

    //need a function for computer to pick a word
    // generating a random number between 0-4
    // math radom gives us a number bewteen 0 inclusive up to but not including 1 (decimals)
    // multiply the generated number by the total number of words in the words array (decimals)
    // round the number down so that we get a 0 - 4 (whole number)
    // use the number as an index for a word in the words array words[]
    // assign the word from the words array at the index randomly selected to the currentWord VARIABLE that begins as an empty string
    // got the element by id and updated the html to the currentWord
    currentWord = words[Math.floor(Math.random()*wordsCount)]; // select word from words array using the number index
    //console.log(Math.floor(Math.random()*wordsCount))
    //console.log(currentWord);
    //
}
getRandomWord();


// look (loop) at the letters in our current word string
function generateUnderscores(){
    //loop through every letter of the current random word from the words Array
    for (var i=0; i < currentWord.length; i++){
        // everytime the for loop is ran we create an underscore for the letter
        // add the underscore to our empty array 
        underScoreString.push("_");
    } 
   // console.log(underScoreString)
}
generateUnderscores();


function displayWordUnderscores(){
    document.getElementById("word").innerHTML = underScoreString.join(" ");
    test = underScoreString.join("");
}
displayWordUnderscores();

// comparison of the users inoput against the current word characters
function imputCompare(userInput){
    // compare the users input to the current word string
    // is the letter that the user picked in the current word string?

   if(currentWord.indexOf(userInput) !== -1){ // if its NOT -1 (true)
        for(var i = 0; i<currentWord.length;i++){ // check how many time the userInput occurs, loop through the word and check every index for the character
            if(currentWord[i] === userInput){
                underScoreString.splice(i, 1, userInput);
            }
        }
        displayWordUnderscores()
        
     // check if word has multiple occurances of userInput, replace all underscores with userInput 
        // var re = /userInput/g,
        // str = currentWord;
        // var count = 0;
        // while ((match = re.exec(str)) != null) {
        //     console.log("YAY")
        //     count++;
        //     console.log("match found at " + match.index);
          
    
        // take the index and replace the underscore for the userInput at the Index in the underscore array
        //console.log(index)
       // do thing
      
       // if the letter is in the word get the index and swap out the underscore for the letter
       //underScoreString.splice(index, 1, userInput);

       // b i r d
       // 0 1 2 3
       //["_", "_", "_", "_"]

   } else {// (false)
       // do this
       console.log("oh no");
       if(guessedLetters.indexOf(userInput) === -1){ // if user input is not in the guessedLeters array
            guessedLetters.push(userInput);
            guessesLeft = guessesLeft -1; // guesses left goes down by 1 if the letter is incorrect and user hasnt already guessed it
            gameValues();
            if(guessesLeft === 0){
                losses++ 
                // reset all variable back to their orginal value excluding words and current word
                guessesLeft = 7;
                guessedLetters = []; 
                underScoreString = [];
        
                gameValues();
                // generate new random word
                getRandomWord();
                // diaply the new random word
                generateUnderscores()
                displayWordUnderscores();
            }

       }else {
           console.log("alreaded guessed that letter")
       }
      
   }
}

// bird index of b
// 0

// anytime a user presses a key while on the page 
// we capture the key that is pressed
    // make sure the key is lowercse
// log it to the console

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();
   // console.log("hello kathy")
   // make sure user still has guesses left
   // if guesses left is 0 and the word is not correctly guessed than game over.
  

    //  check if our array of underscore are all character else the array still contains underscores
    if(underScoreString.indexOf("_") !== -1){
        gameValues();
        imputCompare(userguess);
    }else{
        wins++
        guessesLeft = 7;
        guessedLetters = []; 
        underScoreString = [];

        gameValues();
        // generate new random word
        getRandomWord();
        // diaply the new random word
        generateUnderscores()
        displayWordUnderscores(); 
    }
    
   }
   // console.log(userguess);






//prompt the user to guess a letter √
//show the player thier progress √
//if the guess is correct increment correct_guesses by 1
//if the guess is incorrect increment incorrect_guesses by 1 
//if the incorrect_guesses is greater than 8, tell the user they lost and exit the program
//if correct_guesses is equal to the length of the word, tell the user they won
