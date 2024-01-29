import { tipCalculation } from "./tipCalculation.js";
import { inputValues } from "./inputValue.js";
import { custom } from "./inputValue.js";

export const tipAmount = document.querySelector(".card__tipAmount");
export const total = document.querySelector(".card__total");
export const btnAll = document.querySelectorAll(".card__input--btn");
export const btnReset = document.querySelector(".card__result--reset");

export const displayResult = function () {
  const inputValueResult = inputValues();

  const tipCalculationResult = tipCalculation(
    inputValueResult.billResult,
    inputValueResult.customResult,
    inputValueResult.numberResult
  );

  tipAmount.textContent = `$${tipCalculationResult.totalTipResult}`;
  total.textContent = `$${tipCalculationResult.noTipTotalResult}`;
  total.textContent = `$${tipCalculationResult.totalAmountResult}`;

  let result = inputValueResult.billResult / inputValueResult.numberResult;
  if (inputValueResult.customResult === 0) {
    tipAmount.textContent = `$${inputValueResult.customResult.toFixed(2)}`;
    total.textContent = isNaN(
      inputValueResult.billResult / inputValueResult.numberResult
    )
      ? "$0.00"
      : isFinite(inputValueResult.billResult / inputValueResult.numberResult)
      ? `$${result.toFixed(2)}`
      : "$0.00";
  } else {
  }
};

export const btndispayResult = function () {
  let activeButton = null;

  btnAll.forEach(tip => {
    tip.addEventListener("click", function () {
      const clickedTip = +tip.textContent.replace("%", "");

      const inputValueResult = inputValues();

      const tipCalculationResult = tipCalculation(
        inputValueResult.billResult,
        clickedTip * 0.01,
        inputValueResult.numberResult
      );

      tipAmount.textContent = `$${tipCalculationResult.totalTipResult}`;
      total.textContent = `$${tipCalculationResult.noTipTotalResult}`;
      total.textContent = `$${tipCalculationResult.totalAmountResult}`;

      if (
        inputValueResult.billResult === 0 ||
        inputValueResult.numberResult === 0
      ) {
        tipAmount.textContent = "$0.00";
        total.textContent = "$0.00";
      }

      if (activeButton) {
        activeButton.classList.add("bg-veryDarkCyan");
        activeButton.classList.remove("bg-strongCyan");
      }

      tip.classList.remove("bg-veryDarkCyan");
      tip.classList.add("bg-strongCyan");

      custom.classList.remove("outline-strongCyan");
      activeButton = tip;
    });
  });
};
