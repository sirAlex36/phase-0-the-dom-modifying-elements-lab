// Write your code here
const mainElement = document.getElementById("main");
mainElement.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Alex is the champion";
document.body.appendChild(newHeader);