


// Global Variables
let playerScore = 0;
let ComputerScore =0;


let randomNumber = Math.floor(Math.random() * 2)  //NEXT 3 LINES RADOMIZES COMPUTER CHOICES

const computerChoices = ["SCISSORS", "PAPER", "ROCK"];

computerMove = (computerChoices[randomNumber])
 


let playerInput = prompt("ROCK PAPER SCISSOR"); // Get users Choice

let playerMove = playerInput.toUpperCase();  // Make input uniform


playRound(playerMove, computerMove) 

 function playRound(playerMove, computerMove){
    if ( computerMove == playerMove) //Draw condition 
    alert("it is a tie");

    else if (playerMove == "ROCK" && computerMove == "SCISSORS"|| playerMove == "PAPER" && computerMove == "ROCK"||playerMove == "SCISSORS" && computerMove == "PAPER") //Win Condition 
    alert(`${playerMove} BEATS ${computerMove}. YOU WIN!!!`);
    
   // else if ( playerMove == "PAPER" && computerMove == "ROCK")
   // alert("PAPER BEATS ROCK. YOU WIN!!!");
    
    //else if (playerMove == "SCISSORS" && computerMove == "PAPER")
    //alert("SCISSORS BEATS PAPER. YOU WIN!!!"); 
    
    else                     //lose Conidtion
    alert(`YOU LOSE!!! ${computerMove} BEATS ${playerMove}.`   );}


 
 
   
    
 

    
    console.log(computerMove, playerMove)
    console.log(randomNumber)