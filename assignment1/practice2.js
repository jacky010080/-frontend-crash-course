// 1.
console.log('Q1:');
let age = 16;
if (age >= 18) {
  console.log('can vote');
} else {
  console.log('can’t vote');
}

age = 30;
if (age >= 18) {
  console.log('can vote');
} else {
  console.log('can’t vote');
}
console.log('--------------------');

// 2.
console.log('Q2:');
let number = 5;
if (number % 2 === 0) {
  console.log('it is even');
} else {
  console.log('it is odd');
}

number = 12;
if (number % 2 === 0) {
  console.log('it is even');
} else {
  console.log('it is odd');
}
console.log('--------------------');

// 3.
console.log('Q3:');
let a = 5;
let b = 4;
if (a - b > 0) {
  console.log('a is bigger');
} else if (b - a > 0) {
  console.log('b is bigger');
} else {
  console.log('they’re equal');
}

a = 3;
if (a - b > 0) {
  console.log('a is bigger');
} else if (b - a > 0) {
  console.log('b is bigger');
} else {
  console.log('they’re equal');
}

b = 3;
if (a - b > 0) {
  console.log('a is bigger');
} else if (b - a > 0) {
  console.log('b is bigger');
} else {
  console.log('they’re equal');
}
console.log('--------------------');

// 4.
console.log('Q4:');
let c = 6;
let d = 7;
let e = 8;
if (c === d && d === e) {
  console.log('they’re equal');
} else if  (c >= d && c >= e) {
  console.log('c is biggest');
} else if (d >= c && d >= e) {
  console.log('d is biggest');
} else if (e >= c && e >= d) {
  console.log('e is biggest');
}
c = 8;
e = 6;
if (c === d && d === e) {
  console.log('they’re equal');
} else if  (c >= d && c >= e) {
  console.log('c is biggest');
} else if (d >= c && d >= e) {
  console.log('d is biggest');
} else if (e >= c && e >= d) {
  console.log('e is biggest');
}
c = 7;
e = 7;
if (c === d && d === e) {
  console.log('they’re equal');
} else if  (c >= d && c >= e) {
  console.log('c is biggest');
} else if (d >= c && d >= e) {
  console.log('d is biggest');
} else if (e >= c && e >= d) {
  console.log('e is biggest');
}
console.log('--------------------');

// 5.
console.log('Q5:');
const min = 10;
const max = 100;
let g = 55;
if (g >= min && g <= max) {
  console.log('it is present in given range');
} else {
  console.log('it isn’t present in given range');
}

g = 5;
if (g >= min && g <= max) {
  console.log('it is present in given range');
} else {
  console.log('it isn’t present in given range');
}
console.log('--------------------');

// 6.
console.log('Q6:');
let year = 2100;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log('it is leap year');
    } else {
      console.log('it isn’t leap year');
    }
  } else {
    console.log('it is leap year');
  }
} else {
  console.log('it isn’t leap year');
}

year = 2400;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log('it is leap year');
    } else {
      console.log('it isn’t leap year');
    }
  } else {
    console.log('it is leap year');
  }
} else {
  console.log('it isn’t leap year');
}
