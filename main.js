function printHashes() {
  let count = prompt('Enter amount of symbols for entering:');
  //count = parseInt(count);
  let result = '';
  let i = 0;
  while (i < count) {
    result += '#';
    i++;
  }
  alert(result);
}

function countdownToZero() {
  let number = prompt('Enter num:');
  // number = parseInt(number);
  let result = '';
  while (number >= 0) {
    result += number + '\n';
    number--;
  }
  alert(result);
}

function powerOfNumber() {
  let base = prompt('Enter num:');
  let exponent = prompt('Enter the degree:');
  // base = parseInt(base);
  // exponent = parseInt(exponent);
  let result = 1;
  let i = 0;
  while (i < exponent) {
    result *= base;
    i++;
  }
  alert('Result: ' + result);
}

function commonDivisors() {
  let num1 = prompt('Enter first num:');
  let num2 = prompt('Enter second num:');
  // num1 = parseInt(num1);
  // num2 = parseInt(num2);
  let min = num1 < num2 ? num1 : num2;
  let i = 1;
  let result = 'Common divisors: ';
  while (i <= min) {
    if (num1 % i === 0 && num2 % i === 0) {
      result += i + ' ';
    }
    i++;
  }
  alert(result);
}

function factorial() {
  let number = prompt('Enter num for factorial calc:');
  // number = parseInt(number);
  let factorial = 1;
  let i = 1;
  while (i <= number) {
    factorial *= i;
    i++;
  }
  alert('Factorial ' + number + 'is equal to' + factorial);
}

function solveEquation() {
  let correctAnswer = 6;
  let userAnswer;
  do {
    userAnswer = prompt('How much will 2 + 2 * 2 be?');
    userAnswer = parseInt(userAnswer);
  } while (userAnswer !== correctAnswer);
  alert('That is right!');
}

function divideUntilLessThan50() {
  let number = 1000;
  let count = 0;
  do {
    number /= 2;
    count++;
  } while (number >= 50);
  alert('The resulting number: ' + number + '\nNumber of divisions: ' + count);
}

function multiplesOfNumber() {
  let divisor = prompt('Enter a number to check the multiplicity:');
  let result = 'Numbers are multiples ' + divisor + ' from 1 to 100:\n';
  for (let i = 1; i <= 100; i++) {
    if (i % divisor === 0) {
      result += i + ' ';
    }
  }
  alert(result);
}

function everyFourthElement() {
  let min = prompt('Enter the minimum range value:');
  let max = prompt('Enter the maximum range value:');
  let result = 'Every 4th element from the range ' + min + ' - ' + max + ':\n';
  for (let i = min; i <= max; i += 4) {
    result += i + ' ';
  }
  alert(result);
}

function checkPrimeNumber() {
  let number = prompt('Enter a number to check for simplicity:');
  // number = parseInt(number);
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    alert('The ' + number + ' is simple.');
  } else {
    alert('The ' + number + ' is not simple.');
  }
}

// printHashes();
// countdownToZero();
// powerOfNumber();
// commonDivisors();
// factorial();
// solveEquation();
// divideUntilLessThan50();
// multiplesOfNumber();
// everyFourthElement();
// checkPrimeNumber();