// 2.
const pTag = document.createElement("p");
const pText = document.createTextNode("My first DOM created.");
pTag.appendChild(pText);
const container = document.querySelector(".container");
container.appendChild(pTag);

// 3.
const ulTag = document.createElement("ul");
container.appendChild(ulTag);

// 4.
const colors = ["red", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
  const liTag = document.createElement("li");
  const liText = document.createTextNode(colors[i]);
  liTag.appendChild(liText);
  ulTag.appendChild(liTag);
}