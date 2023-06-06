const input = document.querySelector(".input");
const save = document.querySelector("#save");
const list = document.querySelector("#list");

let todo = [];

//將待辦事項渲染到畫面上
function renderTodo () {
  let str = "";
  todo.forEach((item,index) => {
    str += `
      <li data-index="${index}">${item} 
        <button type="button" class="complete" value="完成" data-index="${index}">完成</button> 
        <button type="button" class="delete" value="刪除" data-index="${index}">刪除</button>
      </li>`;
  });
  list.innerHTML = str;
};

save.addEventListener("click", () => {
  if (input.value === "") {
    alert("請輸入待辦事項！");
    return;
  } else {
    todo.push(input.value);
    input.value = "";
    renderTodo();
  }
});

list.addEventListener('click', (e) => {
  if (e.target.getAttribute("class") === "delete") {
    let index = e.target.getAttribute("data-index");
    todo.splice(index,1);
    alert("刪除成功！");
    renderTodo();
  } else if (e.target.getAttribute("class") === "complete"){
    const index = e.target.getAttribute("data-index");
    const listItem = document.querySelector(`li[data-index="${index}"]`);
    listItem.setAttribute("class", "finished");
  } else {
    return;
  };
});

