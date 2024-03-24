#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a number 
// 2) user input for guessing number 
// 3)compare user input with computer generated number and show rzlt

const randomNumber = Math.floor(Math.random() *10 + 1);
const answers = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message:"Guess the number between 1-10 and try your luck",
    },
]);
console.log(answers);

if(answers.userGuessedNumber === randomNumber){
    console.log("you win the game Congratulations");
}
else{
    console.log("oops!! try your luck next time");
}