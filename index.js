let bill = 0;
let tip = 0;
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
  document.getElementById("input-people").value = people;
  document.getElementById("input-bill").value = twoDecimals(bill);
}

function setTip(e) {
  document
    .querySelectorAll(".input .tip .input-container button")
    .forEach((btn) => btn.classList.remove("active"));
  e.classList.add("active");
  tip = Number(e.value);
  calc();
}

function setBill(e) {
  bill = Number(e.value);
  calc();
}

function setPeople(e) {
  people = Number(e.value);
  if (people <= 0) people = 1;
  calc();
}

function reset() {
  console.log('reset')
  bill = 0;
  tip = 0;
  people = 1;
  tipTotal = 0;
  total = 0;
  document
  .querySelectorAll(".input .tip .input-container button")
  .forEach((btn) => btn.classList.remove("active"));
  calc();
}
