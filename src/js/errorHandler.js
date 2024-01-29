import { inputValues, numberPeople } from "./inputValue.js";
import { tipAmount, total, btnReset } from "./dispayResult.js";

export const errorHandler = function () {
  const inputValueResult = inputValues();

  if (inputValueResult.billResult <= 0 || inputValueResult.numberResult <= 0) {
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  }

  if (inputValueResult.customResult < 0) {
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  }

  if (
    inputValueResult.billResult > 0 ||
    inputValueResult.numberResult > 0 ||
    inputValueResult.customResult > 0 ||
    inputValueResult.billResult < 0 ||
    inputValueResult.customResult < 0 ||
    inputValueResult.numberResult < 0
  ) {
    btnReset.classList.add("bg-strongCyan");
  } else {
    btnReset.classList.remove("bg-strongCyan");
  }

  console.log(inputValueResult.numberResult === 0);

  if (inputValueResult.numberResult === 0) {
    numberPeople.classList.remove("outline-strongCyan");
    numberPeople.classList.add("outline-red");
  } else {
    numberPeople.classList.add("outline-strongCyan");
    numberPeople.classList.remove("outline-red");
  }
};
