const input = document.querySelector(".input_second");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const continueBtn = document.querySelector("#continue");
const resetBtn = document.querySelector("#reset");


let waiting_time = 0;
let remaining_time = 0; // 儲存剩餘倒數時間
let timerId = null; // 儲存計時器的 ID

input.addEventListener("change", (e) => {
  console.log(e.target.value);
  waiting_time = e.target.value * 1000;
});

let countdown = (time) => {
  timerId = setTimeout(() => {
    alert("done");
  }, time);
};

startBtn.addEventListener("click", () => {
  startTime = Date.now();
  countdown(waiting_time);
});

pauseBtn.addEventListener("click", () => {
  clearTimeout(timerId); // 取消計時器
  remaining_time = waiting_time - (Date.now() - startTime); // 計算剩餘時間
  console.log("pause");
});

continueBtn.addEventListener("click", () => {
  startTime = Date.now();
  countdown(remaining_time); // 使用剩餘時間繼續倒數
  console.log('continue');
});

resetBtn.addEventListener("click", () => {
  clearTimeout(timerId);
  input.value = "";
  waiting_time = 0;
  remaining_time = 0;
  timerId = null;
});