const boxes = document.querySelectorAll(".box");
const inputBox = document.getElementById("inputBox");
const resetBtn = document.getElementById("reset");
const msgContainer = document.querySelector(".msg-container");
const msg = document.getElementById("msg");
const submitBtn = document.getElementById("submit");
const back = document.getElementById("backspace");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
const maxGuess = 7;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    inputBox.value += box.innerText;
  });
});
submitBtn.addEventListener("click", () => {
  const guess = parseInt(inputBox.value);
  if(!guess || guess < 1 || guess > 100){
    inputBox.value = "";
    msg.innerText = "Please enter a number between 1 and 100";
    msgContainer.classList.remove("hide");
    return;
  }
  guessCount++;
  if(guess === randomNumber){
    msg.innerText = "🎉 YOU WON!";
    msgContainer.classList.remove("hide");
    inputBox.disabled = true;
    submitBtn.disabled = true;
  }
  else {
    msg.innerText = guess > randomNumber ? "Too high!" : "Too low!";
    msgContainer.classList.remove("hide");
  }
  if(guessCount == maxGuess){
    msg.innerText = guess === randomNumber ? `🎉 YOU WON!` : `The Answer was ${randomNumber}`;
    inputBox.disabled = true;
    submitBtn.disabled = true;
  }
});
back.addEventListener("click", () => {
  inputBox.value = inputBox.value.slice(0,-1);
})
resetBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  inputBox.value = "";
  inputBox.disabled = false;
  submitBtn.disabled = false;
  msgContainer.classList.add("hide");
});