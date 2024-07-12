function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { max: null, min: null, avg: null };
  }
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  const avg = parseFloat((sum / arr.length).toFixed(2));
  return { max, min, avg };
}

function summElementsWorker(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

function differenceMaxMinWorker(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let max = numbers[0];
  let min = numbers[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sumEvenElement += number;
    } else {
      sumOddElement += number;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sumEvenElement += number;
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) {
    return 0;
  }
  return sumEvenElement / countEvenElement;
}

function meatGrinder(worker, ...meat) {
  return worker(...meat);
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (const arr of arrOfArr) {
    const workerResult = func(...arr);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}
