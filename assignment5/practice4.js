const guessing = document.querySelector(".guessing");
const result = document.querySelector("#result");

random_number = Math.floor(Math.random()*101);

guessing.addEventListener("change", (e) => {
  const guessing_number = e.target.value;
  if (guessing_number > random_number) {
    result.textContent = "太大了";
  } else if (guessing_number < random_number) {
    result.textContent = "太小了";
  } else {
    result.textContent = "猜對了！";
  }
});