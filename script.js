//hello, world

function computerMove() {
  let computerMove;
  const randNum = Math.random();

  if (randNum <= 1 / 3) {
    computerMove = "rock";
  } else if (randNum <= 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }

  return computerMove;
}

function result(userMove, computerMove) {
  let winner;

  if (userMove === computerMove) {
    winner = "tie";
  } else if (userMove === "paper" && computerMove === "rock") {
    winner = "user";
  } else if (userMove === "rock" && computerMove === "scissor") {
    winner = "user";
  } else if (userMove === "scissor" && computerMove === "paper") {
    winner = "user";
  } else {
    winner = "computer";
  }

  return [winner, userMove, computerMove];
}

function checkIfGameEnd(whoWon) {
  if (timesWon.user == "5" || timesWon.computer == "5") {
    timesWon = { user: 0, computer: 0 };

    setTimeout(() => {
      resultPopupHtml.classList.add("hidden");
      resultPopupHtml.classList.remove("result-popup");

      document.querySelector(".js-left-content").innerHTML = `Your Choice: `;

      document.querySelector("js-right-content").innerHTML = `Computer Choice: `;

      document.querySelector(".js-left-win-counter").innerHTML = `Win counter: 0`;

      document.querySelector("js-right-win-counter").innerHTML = `Win counter: 0`;

      console.log("Working");
    }, 3000);
    resultPopupHtml.innerHTML =
      whoWon == "user"
        ? `<span>Congratss!!! You won.</span>`
        : `<span>Oops!!! You lost.</span>`;
    resultPopupHtml.classList.remove("hidden");
    resultPopupHtml.classList.add("result-popup");

    console.log("Working");
  } else {
    return;
  }
}

let timesWon = {
  user: 0,
  computer: 0,
};
let resultPopupHtml = document.querySelector(".js-result-popup");
let leftContentHtml = document.querySelector(".js-left-content").innerHTML;

let rightContentHtml = document.querySelector(".js-right-content").innerHTML;

let leftWinCounterHtml = document.querySelector(
  ".js-left-win-counter"
).innerHTML;

let rightWinCounterHtml = document.querySelector(
  ".js-right-win-counter"
).innerHTML;

document.querySelectorAll(".js-grand-child-1").forEach((userChoice) => {
  userChoice.addEventListener("click", () => {
    let userInput;

    if (userChoice.id === "rock") {
      userInput = userChoice.id;
    } else if (userChoice.id === "paper") {
      userInput = userChoice.id;
    } else {
      userInput = userChoice.id;
    }
    let whoWon = result(userInput, computerMove());

    if (whoWon == "end") {
      return;
    } else if (whoWon[0] == "user") {
      timesWon.user += 1;

      document.querySelector(".js-left-content").innerHTML = `Your Choice: ${whoWon[1]}`;
      document.querySelector(".js-right-content").innerHTML = `Computer Choice: ${whoWon[2]}`;

      document.querySelector(".js-left-win-counter").innerHTML = `Win counter: ${timesWon.user}`;
      document.querySelector(".js-right-win-counter").innerHTML = `Win counter: ${timesWon.computer}`;
      checkIfGameEnd(whoWon[0]);
      console.log("user won:", timesWon.user);
    } else if (whoWon[0] == "computer") {
      timesWon.computer += 1;

      document.querySelector(".js-left-content").innerHTML = `Your Choice: ${whoWon[1]}`;
      document.querySelector(".js-right-content").innerHTML = `Computer Choice: ${whoWon[2]}`;

      document.querySelector(".js-left-win-counter").innerHTML = `Win counter: ${timesWon.user}`;
      document.querySelector(".js-right-win-counter").innerHTML = `Win counter: ${timesWon.computer}`;
      checkIfGameEnd(whoWon[0]);

      console.log("user won:", timesWon.user);
      console.log("comp won:", timesWon.computer);
    } else if (whoWon[0] == "tie") {
      document.querySelector(".js-left-content").innerHTML = `Your Choice: ${whoWon[1]}`;
      document.querySelector(".js-right-content").innerHTML = `Computer Choice: ${whoWon[2]}`;

      document.querySelector(".js-left-win-counter").innerHTML = `Win counter: ${timesWon.user}`;
      document.querySelector(".js-right-win-counter").innerHTML = `Win counter: ${timesWon.computer}`;
      console.log("user won:", timesWon.user);
      console.log("Its a tie");
    } else {
      console.log(`Game over: ${whoWon}`);
    }
  });
});
