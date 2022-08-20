const rockPaperScissors = ['rock', 'paper', 'scissors'];

//Click event applied to images//

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
    console.log("It was a tie!");
  } else if (randomNum == 1) {
    console.log("The computer won!");
  } else if (randomNum == 2) {
    console.log("The user won!");
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
    console.log("The user won!");
  } else if (randomNum == 1) {
    console.log("It was a tie!");
  } else if (randomNum == 2) {
    console.log("The computer won!");
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
    console.log("The computer won!");
  } else if (randomNum == 1) {
    console.log("The user won!");
  } else if (randomNum == 2) {
    console.log("It was a tie!");
  }

  }

//Computer's choice selected upon click event//
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function printResults() {
  switch (computerChoice) {
    case "0":
      console.log("It was a tie!");
    case "1":
      console.log("The computer won!");
    case "2":
      console.log("The user won!");
  }
}