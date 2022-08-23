const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let userScore = 0;

rock.addEventListener("click", clickRock);
paper.addEventListener("click", clickPaper);
scissors.addEventListener("click", clickScissors);

function clickRock() {
  const paragraphElement = document.getElementById("response");
  paragraphElement.innerHTML = "";
  const node = document.createTextNode("The user chose rock");
  paragraphElement.appendChild(node);
  let randomNum = getRandomInt(rockPaperScissors.length);
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";
  const node1 = document.createTextNode("The computer chose " + rockPaperScissors[randomNum]);
  resultElement.appendChild(node1);

  if (randomNum == 0) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const tie = document.createTextNode("It was a tie!");
    winnerElement.appendChild(tie);

  } else if (randomNum == 1) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const computerWin = document.createTextNode("The computer won!");
    winnerElement.appendChild(computerWin);
    computerScore++;
    document.getElementById("trackScore").textContent=`(User) ${userScore} -  ${computerScore} (Computer)`;

  } else if (randomNum == 2) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const userWin = document.createTextNode("The user won!");
    winnerElement.appendChild(userWin);
    userScore++;
    document.getElementById("trackScore").textContent=`(User) ${userScore} -  ${computerScore} (Computer)`;
  }
}
function clickPaper() {
  const paragraphElement = document.getElementById("response");
  paragraphElement.innerHTML = "";
  const node = document.createTextNode("The user chose paper");
  paragraphElement.appendChild(node);
  let randomNum = getRandomInt(rockPaperScissors.length);
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";
  const node1 = document.createTextNode("The computer chose " + rockPaperScissors[randomNum]);
  resultElement.appendChild(node1);

  if (randomNum == 0) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const userWin = document.createTextNode("The user won!");
    winnerElement.appendChild(userWin);
    userScore++;
    document.getElementById("trackScore").textContent=`(User) ${userScore} -  ${computerScore} (Computer)`;

  } else if (randomNum == 1) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const tie = document.createTextNode("It was a tie!");
    winnerElement.appendChild(tie);

  } else if (randomNum == 2) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const computerWin = document.createTextNode("The computer won!");
    winnerElement.appendChild(computerWin);
    computerScore++;
    document.getElementById("trackScore").textContent=`(User) ${userScore} -  ${computerScore} (Computer)`;
  }
}
function clickScissors() {
  const paragraphElement = document.getElementById("response");
  paragraphElement.innerHTML = "";
  const node = document.createTextNode("The user chose scissors");
  paragraphElement.appendChild(node);
  let randomNum = getRandomInt(rockPaperScissors.length);
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";
  const node1 = document.createTextNode("The computer chose " + rockPaperScissors[randomNum]);
  resultElement.appendChild(node1);

  if (randomNum == 0) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const computerWin = document.createTextNode("The computer won!");
    winnerElement.appendChild(computerWin);
    computerScore++;
    document.getElementById("trackScore").textContent=`(User) ${userScore} - ${computerScore} (Computer)`;

  } else if (randomNum == 1) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const userWin = document.createTextNode("The user won!");
    winnerElement.appendChild(userWin);
    userScore++;
    document.getElementById("trackScore").textContent=`(User) ${userScore} - ${computerScore} (Computer)`;

  } else if (randomNum == 2) {
    const winnerElement = document.getElementById("winner");
    winnerElement.innerHTML = "";
    const tie = document.createTextNode("It was a tie!");
    winnerElement.appendChild(tie);
  }
  }
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}