// 1.
console.log('Q1:');
// for
for (let i = 1; i <= 10000; i++) {
  console.log(i);
}
// while
let j = 1;
while (j <= 10000) {
  console.log(j);
  j++;
}
console.log('--------------------');

// 2.
console.log('Q2:');
// for
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// while
let k = 1;
while (k <= 100) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k++;
}
console.log('--------------------');

// 3.
console.log('Q3:');
// for
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// while
let l = 1;
while (l <= 100) {
  if (l % 2 === 1) {
    console.log(l);
  }
  l++;
}
console.log('--------------------');

// 4.
console.log('Q4:');
// for
for (let i = 1; i <= 100; i++) {
  if (i > 1) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
// while
let m = 1;
while (m <= 100) {
  if (m > 1) {
    let n = 2;
    let isPrime = true;
    while (n <= Math.sqrt(m)) {
      if (m % n === 0) {
        isPrime = false;
        break;
      }
      n++;
    }
    if (isPrime) {
      console.log(m);
    }
  }
  m++;
}
console.log('--------------------');

// 5.
console.log('Q5:');
const size = 6;
// for
for (let i = 1; i <= size; i++) {
  let layer = ''
  for (let j = 1; j <= i; j++) {
    layer += '*';
  }
  console.log(layer);
}
// while
let o = 1;
while (o <= size) {
  let p = 1;
  let layer = '';
  while (p <= o) {
    layer += '*';
    p++;
  }
  console.log(layer);
  o++;
}
console.log('--------------------');

// 6.
console.log('Q6:');
// for
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
// while
let q = 1;
while (q <= 9) {
  let r = 1;
  while (r <= 9) {
    console.log(`${q} * ${r} = ${q * r}`);
    r++
  }
  q++
}