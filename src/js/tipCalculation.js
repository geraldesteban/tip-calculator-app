export const tipCalculation = function (bill, tip, numberPeople) {
  let totalTipPerson = 0;
  let totalAmountPerson = 0;

  let noTipTotal = 0;

  if (tip === 15) {
    totalTipPerson = (bill * 0.05) / numberPeople;
    totalAmountPerson = bill + totalTipPerson;
  } else if (tip === 10) {
    totalTipPerson = (bill * 0.1) / numberPeople;
    totalAmountPerson = bill + totalTipPerson;
  } else if (tip === 15) {
    totalTipPerson = (bill * 0.15) / numberPeople;
    totalAmountPerson = bill + totalTipPerson;
  } else if (tip === 25) {
    totalTipPerson = (bill * 0.25) / numberPeople;
    totalAmountPerson = bill + totalTipPerson;
  } else if (tip === 50) {
    totalTipPerson = (bill * 0.5) / numberPeople;
    totalAmountPerson = bill + totalTipPerson;
  } else if (tip === 0) {
    totalTipPerson = (bill * tip) / numberPeople;
    totalAmountPerson = totalTipPerson + bill / numberPeople;
  } else {
    totalTipPerson = (bill * tip) / numberPeople;
    totalAmountPerson = totalTipPerson + bill / numberPeople;
  }

  noTipTotal = bill / numberPeople;

  return {
    totalTipResult: totalTipPerson.toFixed(2),
    totalAmountResult: totalAmountPerson.toFixed(2),
    noTipTotalResult: noTipTotal.toFixed(2),
    customTotalTipResult: totalTipPerson.toFixed(2),
    customTotalAmountResult: totalAmountPerson.toFixed(2),
  };
};
