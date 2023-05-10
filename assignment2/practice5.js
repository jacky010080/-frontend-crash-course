const pTag = document.createElement("p");
const pText = document.createTextNode("My first DOM created.");
pTag.appendChild(pText);
const container = document.querySelector(".container");
container.appendChild(pTag);

const ulTag = document.createElement("ul");
container.appendChild(ulTag);

const colors = ["red", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
  const liTag = document.createElement("li");
  const liText = document.createTextNode(colors[i]);
  liTag.appendChild(liText);
  ulTag.appendChild(liTag);
}

function addColor() {
  const liTag = document.createElement("li");
  const input = document.querySelector("#input");
  const liText = document.createTextNode(input.value);
  liTag.appendChild(liText);
  ulTag.appendChild(liTag);
  input.value = "";
}
