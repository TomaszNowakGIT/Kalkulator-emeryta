let question;
let payment, age, saving, retirement, death, pension;
let addBtn;
let resulthtml;
let dialog;
let input;

function main() {
  searchForElements();
  prepareDOMEvents();
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
  addBtn.addEventListener("click", addElementClic);
}

function addElementClic() {
  convert();
}

function dialogm(){
  dialog.innerHTML = `<h1>Hej kolego/koleżanko</h1>
  <h2>chyba musisz coś wpisać</h2>`;
  dialog.style.display ="block";
  idInterwalu = setInterval(dialognone, 5000);
}

function dialognone(){
   dialog.style.display ="none";
}

function ifinput(
  age_input,
  saving_input,
  retirement_input,
  death_input,
  pension_input
) {
  if (
    (age_input,
    saving_input,
    retirement_input,
    death_input,
    pension_input === Number())
  ) {
    convert();
  } else if (
    (age_input,
    saving_input,
    retirement_input,
    death_input,
    pension_input === "")
  ) {
    dialogm();
  }
}
function convert() {
  let age_input = age.value;
  let saving_input = saving.value;
  let retirement_input = retirement.value;
  let death_input = death.value;
  let pension_input = pension.value;

  ifinput(
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
  }
  
  }

function show_result(wynik_wyliczen) {
  resulthtml.innerHTML = +Math.floor(wynik_wyliczen) + " zł" + "<br>"+ " miesięcznie";}

document.addEventListener("DOMContentLoaded", main);
