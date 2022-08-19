const rps = ['rock', 'paper', 'scissors'];

//Click function applied to images//

rock.addEventListener("click", clickRock);
paper.addEventListener("click", clickPaper);
scissors.addEventListener("click", clickScissors);

function clickRock() {
  const paragraphElement = document.getElementById("response");
  const node = document.createTextNode("The user chose rock");
  paragraphElement.appendChild(node);
  const node1 = document.createTextNode("The computer chose " + computerChoice);
  paragraphElement.appendChild(node1);
}
function clickPaper() {
  const paragraphElement = document.getElementById("response");
  const node = document.createTextNode("The user chose paper");
  paragraphElement.appendChild(node);
  const node1 = document.createTextNode("The computer chose " + computerChoice);
  paragraphElement.appendChild(node1);
}
function clickScissors() {
  const paragraphElement = document.getElementById("response");
  const node = document.createTextNode("The user chose scissors");
  paragraphElement.appendChild(node);
  const node1 = document.createTextNode("The computer chose " + computerChoice);
  paragraphElement.appendChild(node1);
}


//get a random number between 0-2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const randomNum = getRandomInt(rps.length);
const computerChoice = rps[randomNum];


console.log('The computer chose', computerChoice);