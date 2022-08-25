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

  const node = document.createTextNode(`The user chose ${userChoice}`); 
  paragraphElement.appendChild(node);

  let randomNum = getRandomInt(rockPaperScissors.length);

  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  const computerChoice = rockPaperScissors[randomNum];
  const node1 = document.createTextNode(`The computer chose ${computerChoice}`)
  resultElement.appendChild(node1);

  const message = resultsMessage(userChoice, computerChoice);

  if (message === "The computer won!") computerScore++;
  if (message === "The user won!") userScore++;

  const trackScore = document.getElementById("trackScore");
  trackScore.textContent= `(User) ${userScore} - ${computerScore} (Computer)`;

  const winnerElement = document.getElementById('winner');
  winnerElement.textContent = message;

function resultsMessage(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "It was a tie!";
  switch (userChoice) {
    case "rock": 
      return computerChoice === "paper" ? "The computer won!" : "The user won!";
    case "paper":
      return computerChoice === "rock" ? "The user won!" : "The computer won!";
    case "scissors":
      return computerChoice === "rock" ? "The computer won!" : "The user won!";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
}