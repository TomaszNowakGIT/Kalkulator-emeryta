let question;
let payment, age, saving, retirement, death, pension;
let addBtn;
let resulthtml;
let dialog;
let input;
let inputsWithError = []

function main() {
  searchForElements();
  prepareDOMEvents();
  dialogstart(clearInterval(dialognone));
}

function searchForElements() {
  payment = document.getElementById("payment");
  age = document.getElementById("age");
  saving = document.getElementById("saving");
  retirement = document.getElementById("retirement");
  death = document.getElementById("death");
  pension = document.getElementById("pension");
  addBtn = document.getElementById("btn_view_result");
  resulthtml = document.getElementById("result");
  dialog = document.getElementById("speech-bubble");
  input = document.querySelectorAll("input")
}

function prepareDOMEvents() {
  addBtn.addEventListener("click", calculateResult);
}

function iliterateInput() {
  for (let i = 0; i < inputsWithError.length; i++) {
    inputsWithError[i].style.border = "1px red solid"
  }

setInterval(iliterateInputDefault, 4000)

}

function iliterateInputDefault() {
  for (let i = 0; i < input.length; i++) {
    input[i].style.border = "1px grey solid"
  }
}

function dialogm() {
  dialognone = setInterval(dialognone, 5000);
  dialog.innerHTML = `<h1>Hej kolego/koleżanko</h1>
  <h2>chyba musisz coś wpisać !!</h2>`;
  dialog.style.display = "block";
}

function dialogstart() {
  dialognone = setInterval(dialognone, 5000);
  dialog.innerHTML = `<h1>Nie ma na co czekać,</h1>
  <h2>uzupełnij wszystkie pola.</h2>`;
  dialog.style.display = "block";
}

function dialogproblem() {
  dialognone = setInterval(dialognone, 5000);
  dialog.innerHTML = `<h1>Hej,</h1>
  <h2>chyba coś ściemniasz.</h2>`;
  dialog.style.display = "block";
}

function dialogend() {
  dialognone = setInterval(dialognone, 5000);
  dialog.innerHTML = `<h1>No i teraz</h1>
  <h2>wszystko jasne.</h2>`;
  dialog.style.display = "block";
}

function dialognone() {
  dialog.style.display = "none";
}

function stopInterval() {
  clearInterval(dialognone);
  clearInterval(iliterateInputDefault);
}

function validateLoop(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i].value === '') {
      inputsWithError.push((input[i]))
      iliterateInput();
      dialogm();
    }

  }
  iliterateInput();
  dialogm();
}

function calculateResult() {
  stopInterval();
  validateLoop(input);

  let ageInput = age.value;
  let savingInput = saving.value;
  let retirementInput = retirement.value;
  let deathInput = death.value;
  let pensionInput = pension.value;

  let timeToRetire = (Math.floor(retirementInput) - Math.floor(ageInput)) * Math.floor(12);
  let retiredYears = (Math.floor(deathInput) - Math.floor(retirementInput)) * Math.floor(12);
  let lifeSavings = Math.floor(retiredYears) * Math.floor(pensionInput);
  let savingTime = Math.floor(lifeSavings) - Math.floor(savingInput);
  let resultOfEquations = Math.floor(savingTime) / Math.floor(timeToRetire);

  console.log(Math.floor(resultOfEquations));
  if (resultOfEquations >= 1) {
    show_result(resultOfEquations);
    dialogend();
  }
  if (resultOfEquations === Infinity || resultOfEquations === -Infinity) {
    dialogproblem();
    return;
  }
}

function show_result(resultOfEquations) {
  resulthtml.innerHTML = +Math.floor(resultOfEquations) + " zł" + "<br>" + " miesięcznie";
}

document.addEventListener("DOMContentLoaded", main);