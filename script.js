const header = document.querySelector(".header").style.display = "flex";
const next = document.querySelector(".nextBtn").style.display = "none";
const hurrayPage = document.querySelector(".hurray-page").style.display = "none";
const footer = document.querySelector(".footer").style.display = "flex";
const rock = document.getElementById("rock").outerHTML;
const paper = document.getElementById("paper").outerHTML;
const scissors = document.getElementById("scissors").outerHTML;
const resetButton = document.querySelector(".reset");

const Options = { rock, paper, scissors };

let UserScore = JSON.parse(localStorage.getItem("user-score")) || 0;
document.querySelector(".user-score h3").innerHTML = UserScore;

let ComputerScore = JSON.parse(localStorage.getItem("computer-score")) || 0;
document.querySelector(".computer-score h3").innerHTML = ComputerScore;

const Process = (value) => {
  const mainPage = document.querySelector(".main-page").style.display = "none";
  const resultPage= document.querySelector(".result-page").style.display = "block";
  document.getElementById("userChoice").innerHTML = Options[value];
  let computer = ComputerOption();
  decide(value, computer);
};

const ComputerOption = () => {
  const Choices = ["rock", "paper", "scissors"];
  const pcPick = Choices[Math.floor(Math.random() * 3)];
  document.getElementById("PCChoice").innerHTML = Options[pcPick];
  return pcPick;
};

const decide = (userPick, pcPick) => {
  let result;
  switch (userPick) {
    case "rock":
      switch (pcPick) {
        case "scissors":
          result = "YOU WIN";
          break;
        case "paper":
          result = "YOU LOST";
          break;
        case "rock":
          result = "TIE UP";
          break;
      }
      break;
    case "paper":
      switch (pcPick) {
        case "rock":
          result = "YOU WIN";
          break;
        case "scissors":
          result = "YOU LOST";
          break;
        case "paper":
          result = "TIE UP";
          break;
      }
      break;
    case "scissors":
      switch (pcPick) {
        case "paper":
          result = "YOU WIN";
          break;
        case "rock":
          result = "YOU LOST";
          break;
        case "scissors":
          result = "TIE UP";
          break;
      }
      break;
  }

  Conclusion(result);
  if (result === "YOU WIN") {
    UserCredit(UserScore + 1);
    const next = document.querySelector(".nextBtn").style.display = "block";
    const EllipseUser = document.querySelector(".Ellipse-User").style.display = "block";
    const EllipsePC = document.querySelector(".Ellipse-PC").style.display = "none";
    const pc = document.querySelector(".Conclusion h3").style.display = "block";
  } else if (result === "YOU LOST") {
    ComputerCredit(ComputerScore + 1);
    const next = document.querySelector(".nextBtn").style.display = "none";
    const EllipseUser = document.querySelector(".Ellipse-User").style.display = "none";
    const EllipsePC = document.querySelector(".Ellipse-PC").style.display = "block";
    const pc = document.querySelector(".Conclusion h3").style.display = "block";
  } else {
    const next = document.querySelector(".nextBtn").style.display = "none";
    const EllipseUser = document.querySelector(".Ellipse-User").style.display = "none";
    const EllipsePC = document.querySelector(".Ellipse-PC").style.display = "none";
    const pc = document.querySelector(".Conclusion h3").style.display = "none";
  }
};

const UserCredit = (PlayerScore) => {
  UserScore = PlayerScore;
  if (localStorage) localStorage.setItem("user-score", JSON.stringify(PlayerScore));
  if (UserScore) document.querySelector(".user-score h3").innerText = PlayerScore;
};

const ComputerCredit = (PCScore) => {
  ComputerScore = PCScore;
  if (localStorage) localStorage.setItem("computer-score", JSON.stringify(PCScore));
  if (ComputerScore) document.querySelector(".computer-score h3").innerText = PCScore;
};

const Conclusion = (choose) => {
  document.querySelector(".Conclusion h1").innerText = choose;
};

const restart = () => {
  const header = document.querySelector(".header").style.display = "flex";
  const mainPage = document.querySelector(".main-page").style.display = "block";
  const resultPage = document.querySelector(".result-page").style.display = "none";
  const next = document.querySelector(".nextBtn").style.display = "none";
  const hurrayPage = document.querySelector(".hurray-page").style.display = "none";
};

const resetScores = () => {
  UserScore = 0;
  ComputerScore = 0;
  localStorage.setItem("user-score", "0");
  localStorage.setItem("computer-score", "0");
  document.querySelector(".user-score h3").innerText = "0";
  document.querySelector(".computer-score h3").innerText = "0";
};
resetButton.addEventListener("click", resetScores);

const Next = () => {
  const header = document.querySelector(".header").style.display = "none";
  const resultPage = document.querySelector(".result-page").style.display = "none";
  const rules = document.querySelector(".rulesBtn").style.display = "block";
  const next = document.querySelector(".nextBtn").style.display = "none";
  const hurrayPage = document.querySelector(".hurray-page").style.display = "flex";
};

const rulesInfo = document.querySelector(".rules-info");
const openRules = document.querySelector(".rulesBtn");
const closeRules = document.querySelector(".exit-rules-info");

const close = () => rulesInfo.classList.add("part");
const open = () => rulesInfo.classList.remove("part");

closeRules.addEventListener("click", close);
openRules.addEventListener("click", open);


// done by zaman