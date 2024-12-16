

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

function getHumanChoice() {
  let choice = prompt("Choose between rock, paper, or scissors")
  if (choice.toLowerCase() === "rock") {
    return "rock"
  }
  else if (choice.toLowerCase() === "paper") {
    return "paper"
  }
  else if (choice.toLowerCase() === "scissors") {
    return "scissors"
  }
  else {
    return "Invalid input."
  }
}

console.log(getComputerChoice())
console.log(getHumanChoice())