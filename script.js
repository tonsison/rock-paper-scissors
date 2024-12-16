

let random_number = Math.floor(Math.random() * 3)

function getComputerChoice() {
  if (random_number === 0) {
    return "rock"
  }
  else if (random_number === 1) {
    return "paper"
  }
  else {
    return "scissors"
  }
}

console.log(getComputerChoice())