function getComputerChoice() {
  let random_number = Math.floor(Math.random() * 3)

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

function playGame() {
  let humanScore = 0
  let computerScore = 0

  function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
      humanScore++
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice == "scissors" && computerChoice === "rock")) {
      console.log("You lose! " + computerChoice + " beats " + humanChoice + ".")
      computerScore++
    }
    else {
      console.log("Its a Draw!")
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection)
    console.log("Human Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
  }
}

playGame()

