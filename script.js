let body = document.querySelector('body');
let newGame = document.querySelector('#new-game');
let msg = document.querySelector('#msg');
let mode = document.querySelector('.mode');
const choices = document.querySelectorAll('.choice');
let userSore = document.querySelector('#user-score');
let compSore = document.querySelector('#comp-score');

let userScoreCount = 0;
let compScoreCount = 0;

const genCompChoice = ()=> {
  const options = ['rock', 'paper', 'scissors'];
  const randNum = Math.floor(Math.random() * 3);
  return options[randNum];
};

const drawGame = ()=> {
  msg.innerText = "It's a draw!";
  msg.style.backgroundColor = '#023047';
};

const playGame = (userChoice)=> {
  console.log(userChoice);
  const compChoice = genCompChoice();
  console.log(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  }else {
    let userWin = true;
    if (userChoice === 'rock') {
      userWin = compChoice === 'paper'? false : true;
    }
    else if (userChoice === 'paper') {
      userWin = compChoice === 'scissors'? false : true;
    }
    else if (userChoice === 'scissors') {
      userWin = compChoice === 'rock'? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener('click', ()=> {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});

const showWinner = (userWin, userChoice, compChoice)=> {
  if (userWin) {
    userScoreCount++;
    userSore.innerText = userScoreCount;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = '#0A5C36';
  } else {
    compScoreCount++;
    compSore.innerText = compScoreCount;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = '#660000';
  }
};

mode.addEventListener('click', ()=> {
  body.classList.toggle('dark');
});

const reset = ()=> {
  userScoreCount = 0;
  compScoreCount = 0;
  userSore.innerText = userScoreCount;
  compSore.innerText = compScoreCount;
  msg.innerText = 'Play your move';
  msg.style.backgroundColor = '#023047';
};

newGame.addEventListener('click', reset);