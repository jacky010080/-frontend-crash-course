// 1.
const fruit = ["apple", "banana", "grape", "cherry", "guava"];

// 2.
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
};

// 3.
fruit[2] = 'Durain';
console.log(fruit);

// 4.
fruit.push("orange", "lemon");

// 5.
fruit.splice(0,1);

// 6.
for(let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// 7.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squaredNumbers = numbers.map((num) => {
  return num ** 2;
});
console.log(squaredNumbers);

// 8.
const filteredNumbers = numbers.filter((num) => {
  if (num > 1) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      return num;
    }
  }
});
console.log(filteredNumbers);

// 9.
const reducedNumbers = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(reducedNumbers);