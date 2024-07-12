"use strict";
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return [];
  } else if (d === 0) {
    
    return [-b / (2 * a)];
  } else {
    
    return [
      (-b + Math.sqrt(d)) / (2 * a),
      (-b - Math.sqrt(d)) / (2 * a),
    ];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return parseFloat(totalAmount.toFixed(2));
}

