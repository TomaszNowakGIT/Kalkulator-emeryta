let question;
let payment, age, saving, retirement, death, pension;
let addBtn;
let resulthtml;
let dialog;
let input;

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
  addBtn.addEventListener("click", calculateResult,stopInterval);
  
}


function iliterateInput(){
  for (let i = 0; i < input.length; i++ ){
    input[i].style.border = "1px red solid"
  }
defaultColor = setInterval(iliterateInputDefault, 4000);
}
function iliterateInputDefault(){
  for (let i = 0; i < input.length; i++ ){
    input[i].style.border = "1px grey solid"
  }

}

function dialogm(){
  dialognone = setInterval(dialognone, 5000);
  dialog.innerHTML = `<h1>Hej kolego/koleżanko</h1>
  <h2>chyba musisz coś wpisać !!</h2>`;
  dialog.style.display ="block";
  
}

function dialogstart(){
  dialognone = setInterval(dialognone, 5000);
  dialog.innerHTML = `<h1>Nie ma na co czekać,</h1>
  <h2>uzupełnij wszystkie pola.</h2>`;
  dialog.style.display ="block";
 
}
function dialogproblem(){
  dialognone = setInterval(dialognone, 5000);
  dialog.innerHTML = `<h1>Hej,</h1>
  <h2>chyba coś ściemniasz.</h2>`;
  dialog.style.display ="block";
 
}
function dialogend(){
  dialognone = setInterval(dialognone, 5000);
  dialog.innerHTML = `<h1>No i teraz</h1>
  <h2>wszystko jasne.</h2>`;
  dialog.style.display ="block";
 
}

function dialognone(){
   dialog.style.display ="none";
   
}
function stopInterval(){
  clearInterval(dialognone)
}
function validateLoop(input){
  for (let i = 0; i < input.length; i++ ){
    input[i].value
    return
  }
  debugger;
}

function validateForm(
  age_input,
  saving_input,
  retirement_input,
  death_input,
  pension_input
)

 {
  
  if (
    (age_input,
      saving_input,
      retirement_input,
      death_input,
      pension_input === Number())
  ) {
    calculateResult();
    
  } else if (
    (age_input,
    saving_input,
    retirement_input,
    death_input,
    pension_input === "")
  ) {
    dialogm();
    iliterateInput();
  }
}
function calculateResult() {
  let age_input = age.value;
  let saving_input = saving.value;
  let retirement_input = retirement.value;
  let death_input = death.value;
  let pension_input = pension.value;

  validateForm(
    age_input,
    saving_input,
    retirement_input,
    death_input,
    pension_input
  );

  let czas_na_skladki =
    (Math.floor(retirement_input) - Math.floor(age_input)) * Math.floor(12);
  let ile_wyplaty =
    (Math.floor(death_input) - Math.floor(retirement_input)) * Math.floor(12);
  let oszczednosci = Math.floor(ile_wyplaty) * Math.floor(pension_input);
  let ile_do_oszczedzenia = Math.floor(oszczednosci) - Math.floor(saving_input);
  let wynik_wyliczen =
    Math.floor(ile_do_oszczedzenia) / Math.floor(czas_na_skladki);

  console.log(Math.floor(wynik_wyliczen));
  
  
  if(wynik_wyliczen >= 1){
    show_result(wynik_wyliczen);
    dialogend();
  }if(wynik_wyliczen === Infinity || wynik_wyliczen === -Infinity ){
    dialogproblem();
    return;

     }
  
  }

function show_result(wynik_wyliczen) {
  resulthtml.innerHTML = +Math.floor(wynik_wyliczen) + " zł" + "<br>"+ " miesięcznie";
  }
  

document.addEventListener("DOMContentLoaded", main);
