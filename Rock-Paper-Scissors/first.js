let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScoreBoard = document.querySelector("#user-score");
const computerScoreBoard = document.querySelector("#comp-score");



const generateComputerChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    console.log("Draw game!!");
    msg.innerText = "Draw game!!";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin,userChoice,computerChoice) => {
        if(userWin){
            userScore++;
            userScoreBoard.innerText = userScore;
            console.log("User wins!!");
            msg.innerText = `You win!! Your ${userChoice} beats ${computerChoice}`;
            msg.style.backgroundColor = "green";
        }
        else{
            computerScore++;
            computerScoreBoard.innerText = computerScore;
            console.log("Computer wins!!");
            msg.innerText = `Computer wins!! ${computerChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
        console.log("User Score: ",userScore);
        console.log("Computer Score: ",computerScore);
}

const playGame = (userChoice)=>{
    console.log("user choice is ",userChoice);
    const computerChoice = generateComputerChoice();
    console.log("computer choice is ",computerChoice);

    if(userChoice === computerChoice){
        drawGame();
    }
   
    else{
        let userWin = true;
        if(userChoice === "rock" && computerChoice === "paper"){
            userWin = false;
        }
        else if(userChoice === "paper" && computerChoice === "scissor"){
            userWin = false;
        }
         else if(userChoice === "scissor" && computerChoice === "rock"){
            userWin = false;
        }
        showWinner(userWin,userChoice,computerChoice);

    }

};



choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
});