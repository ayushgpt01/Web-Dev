let max = parseInt(prompt("Welcome! Enter your max number"));
while (!max) {
  max = parseInt(prompt("Enter a valid number"));
}
const targetNum = Math.floor(Math.random() * max + 1);
let guess = parseInt(prompt("Ënter your first guess"));
let count = 1;
while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  count++;
  if (guess < targetNum) {
    guess = prompt("Too Low. Guess again: ");
  } else {
    guess = prompt("Too High. Guess again: ");
  }
}

if (guess === "q") {
  console.log(`You quit in ${count} tries`);
} else {
  console.log(`It took you ${count} guesses`);
}
