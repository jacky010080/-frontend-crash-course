// 1.
console.log('Q1:');
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
}
console.log(isEven(4));
console.log('--------------------');

// 2.
console.log('Q2:');
const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
    } else {
      return true;
    }
  }
}
console.log(isLeapYear(2400));
console.log('--------------------');

// 3.
console.log('Q3:');
const isPrime = (number) => {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    return true;
  }
}
console.log(isPrime(11));
console.log('--------------------');

// 4.
console.log('Q4:');
const findMax = (a, b, c) => {
  if (a === b && b === c) {
    return 'the numbers are equal';
  }else if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else if (c >= a && c >= b) {
    return c;
  }
}
console.log(findMax(1,2,3));
console.log(findMax(6,5,4));
console.log(findMax(5,5,5));