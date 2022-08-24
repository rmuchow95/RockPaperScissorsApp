const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let userScore = 0;

setEventListeners();

function setEventListeners() {
  const userChoices = document.getElementById("userChoices");
  for (let i = 0; i < userChoices.children.length; i++) {
    let choice = userChoices.children[i];
    choice.addEventListener('click', function (event) {
      const userChoice = event.target.id;
      clickRPS(userChoice);
    })
  }
}

function clickRPS(userChoice) {
  const paragraphElement = document.getElementById("response");
  paragraphElement.textContent = "";

  const node = document.createTextNode('The user chose ${userChoice}'); 

  paragraphElement.appendChild(node);

  let randomNum = getRandomInt(rockPaperScissors.length);

  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  const computerChoice = rockPaperScissors[randomNum];

  const node1 = document.createTextNode('The computer chose ${computerChoice}')

  resultElement.appendChild(node1);

  const message = resultMessage(userChoice, computerChoice);

  if (message === 'The computer won!') computerScore++;
  if (message === 'The user won!') userScore++;

  const trackScore = document.getElementById("trackScore")
  trackScore.textContent= `(User) ${userScore} - ${computerScore} (Computer)`;

  const winnerElement = document.getElementById('winner');
  winnerElement.textContent = message;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}