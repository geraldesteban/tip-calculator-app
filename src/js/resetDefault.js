import { tipAmount, total, btnAll } from "./dispayResult.js";
import { bill, custom, numberPeople } from "./inputValue.js";

export const resetDefault = function () {
  bill.value = "";
  custom.value = "";
  numberPeople.value = "";

  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";

  bill.classList.remove("outline-none");
  custom.classList.remove("outline-none");
  numberPeople.classList.remove("outline-none");
};
