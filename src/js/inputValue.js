export const bill = document.querySelector("#bill");
export const custom = document.querySelector("#custom");
export const numberPeople = document.querySelector("#people");
export const btnAll = document.querySelectorAll(".card__input--btn");

export const inputValues = function (
  billValue = +bill.value,
  customValue = +custom.value * 0.01,
  numberValue = +numberPeople.value
) {
  return {
    billResult: billValue,
    customResult: customValue,
    numberResult: numberValue,
  };
};
