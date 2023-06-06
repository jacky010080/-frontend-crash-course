const num = document.querySelector(".input_num")
const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const show_num1 = document.querySelector(".num1")
const show_num2 = document.querySelector(".num2")
const result = document.querySelector("#result");

let num1;
let num2;

num.addEventListener("change", (e) => {
  if (num1 === undefined) {
    num1 = parseInt(e.target.value);
    show_num1.textContent += num1;
    e.target.value = "";
  } else if (num2 === undefined) {
    num2 = parseInt(e.target.value);
    show_num2.textContent += num2;
    e.target.value = "";
  }
});

addition.addEventListener("click", () => {
  result.textContent = `${num1} + ${num2} = ${num1 + num2}`;
});
subtraction.addEventListener("click", () => {
  result.textContent = `${num1} - ${num2} = ${num1 - num2}`;
});
multiplication.addEventListener("click", () => {
  result.textContent = `${num1} * ${num2} = ${num1 * num2}`;
});
division.addEventListener("click", () => {
  result.textContent = `${num1} / ${num2} = ${num1 / num2}`;
});
