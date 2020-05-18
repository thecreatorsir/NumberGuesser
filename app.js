// take the variable

let min = 1,
  max = 10,
  guesses = 3,
  win = Math.floor(Math.random() * (max - min + 1) + min);

//get a event listners
const game = document.querySelector("#game"),
  min_num = document.querySelector(".min-num"),
  max_num = document.querySelector(".max-num"),
  guess_input = document.querySelector("#guess-input"),
  guess_btn = document.querySelector("#guess-btn"),
  Message = document.querySelector(".message");

min_num.textContent = min;
max_num.textContent = max;
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guess_btn.addEventListener("click", result);
function result(e) {
  let guess = parseInt(guess_input.value);
  if (isNaN(guess) || guess < min || guess > max) {
    //wrong input case
    showMessage(`please enter a number between ${min} and ${max}`, "red");
  }

  //check if won
  if (guess === win) {
    //win case
    guess_input.disabled = true;
    guess_input.style.borderColor = "green";
    showMessage(`correct guess:${guess}`, "green");
    guess_btn.value = "play again";
    guess_btn.className = "play-again";
  } else {
    guesses = guesses - 1;
    if (guesses === 0) {
      //lose case
      guess_input.disabled = true;
      guess_input.style.borderColor = "red";
      showMessage(`GAME OVER correct answer was ${win}`, "red");
      guess_btn.value = "play again";
      guess_btn.className = "play-again";
    } else {
      //continue
      guess_input.value = "";
      showMessage(`worng answere ${guesses} guesses remaining`, "red");
    }
  }
}

function showMessage(message, color) {
  Message.textContent = message;
  Message.style.color = color;
}
