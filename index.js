const rps = ['rock', 'paper', 'scissors'];

//Click function applied to images//

rock.addEventListener("click", clickRock);
paper.addEventListener("click", clickPaper);
scissors.addEventListener("click", clickScissors);

function clickRock() {
  const paragraphElement = document.getElementById("response");
  const node = document.createTextNode("The user chose rock");
  
  paragraphElement.appendChild(node);
}
function clickPaper() {
  alert ("The user chose paper");
}
function clickScissors() {
  alert ("The user chose scissors");
}


//get a random number between 0-2
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const randomNum = getRandomInt(rps.length);

console.log(getRandomInt(rps.length));