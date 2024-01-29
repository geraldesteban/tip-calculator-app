import { bill, custom, numberPeople, btnAll } from "./js/inputValue.js";
import { displayResult, btndispayResult } from "./js/dispayResult.js";
import { errorCustom, errorHandler } from "./js/errorHandler.js";
import { btnReset } from "./js/dispayResult.js";
import { resetDefault } from "./js/resetDefault.js";

bill.addEventListener("click", function () {
  bill.classList.add("outline-strongCyan");
  custom.classList.remove("outline-strongCyan");
  numberPeople.classList.remove("outline-strongCyan");
  numberPeople.classList.remove("outline-red");

  bill.addEventListener("input", function () {
    displayResult();
    errorHandler();
  });
});

custom.addEventListener("click", function () {
  bill.classList.remove("outline-strongCyan");
  custom.classList.add("outline-strongCyan");
  numberPeople.classList.remove("outline-strongCyan");
  numberPeople.classList.remove("outline-red");

  displayResult();

  btnAll.forEach(btn => {
    btn.classList.remove("bg-strongCyan");
    btn.classList.add("bg-veryDarkCyan");
  });

  custom.addEventListener("input", function () {
    displayResult();
    errorHandler();
  });
});

numberPeople.addEventListener("click", function () {
  bill.classList.remove("outline-strongCyan");
  custom.classList.remove("outline-strongCyan");
  numberPeople.classList.add("outline-strongCyan");

  numberPeople.addEventListener("input", function () {
    displayResult();
    errorHandler();
  });
});

btndispayResult();

btnReset.addEventListener("click", function () {
  resetDefault();
});
