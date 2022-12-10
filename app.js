const computerChoiceDisplay = document.getElementById('computer-choice');

const userChoiceDisplay = document.getElementById('user-choice');

const resultDisplay = document.getElementById('result');


const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e => 
{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    createComputerChoice();
    createResult();

}))

function createComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    console.log(randomNumber);

    
 
    if(randomNumber % 2 === 0)
        computerChoice = 'paper';
        
    
    else if(randomNumber % 5 === 0 || randomNumber % 3 === 0)
        computerChoice = 'rock';

    else
        computerChoice = 'scissors';

    computerChoiceDisplay.innerHTML = computerChoice;
}

function createResult()
{


    if(userChoice === computerChoice)
    {
        result = "No one wins! It's a draw.";
    }
    if(userChoice === 'rock' && computerChoice === 'paper')
    {
        result = 'You loose!';

    }

    if(userChoice === 'rock' && computerChoice === 'scissors')
    {
        result = 'You win!';
    }

    if(userChoice === 'paper' && computerChoice === 'rock')
    {
        result = 'You win!';
    }

    if(userChoice === 'paper' && computerChoice === 'scissors')
    {
        result = 'You loose!';
    }

    if(userChoice === 'scissors' && computerChoice === 'rock')
    {
        result = 'You loose!';
    }

    if(userChoice === 'scissors' && computerChoice === 'paper')
    {
        result = 'You win!';
    }

    resultDisplay.innerHTML = result;

}

