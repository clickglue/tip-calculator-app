let bill = '';
let tip = '';
let people = 1;
let tipTotal = 0;
let total = 0;

function twoDecimals(e) {
  e = Number(e);
  return e.toFixed(2);
}

function calc() {
  tipTotal = bill * (tip / 100);
  total = bill + tipTotal;
  document.getElementById("tip-result").innerText = twoDecimals(
    tipTotal / people
  );
  document.getElementById("total-result").innerText = twoDecimals(
    total / people
  );
}

function updateScreen() {

  document.getElementById("input-people").value = people;
  document.getElementById("input-bill").value = twoDecimals(bill);
}

function setTip(e) {
  e.placeholder = "";
  document
    .querySelectorAll(".input .tip .input-container button")
    .forEach((btn) => btn.classList.remove("active"));
  e.classList.add("active");
  tip = Number(e.value);
  calc();
}

function setBill(e) {
  e.classList.add("active");
  bill = Number(e.value);
  calc();
}

function setPeople(e) {
  e.classList.add("active");
  people = Number(e.value);
  if (people <= 0) {
    showWarning(true);
    people = 1;
  } else {
    showWarning(false)
  }
  calc();
}

function showWarning(check){
  if(check){
    document.getElementById('warning').style.display='block'

  } else {
    document.getElementById('warning').style.display='none'
  }
}

function reset() {
  bill = null;
  tip = 0;
  people = null;
  tipTotal = 0;
  total = 0;
  document
    .querySelectorAll(".input .tip .input-container button")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .getElementById("input-bill", "input-tip", "input-people")
    .classList.remove("active");
  document.getElementById("input-tip").placeholder = "Custom";
  document.getElementById("input-tip").value = "";
  updateScreen();
}
