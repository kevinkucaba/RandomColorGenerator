const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
const randomColorBtn = document.getElementById("randomColorBtn");
const randomColorStr = document.getElementById("randomColor");
const mainConent = document.getElementById("main-content");

randomColorBtn.addEventListener("click", () => {
  let color = generateRandomColor();

  randomColorStr.innerText = color;
  mainConent.style.backgroundColor = color;
});

function generateRandomColor() {
  console.log("Getting random color");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let num = hex[Math.floor(Math.random() * 16)];
    color += num;
  }

  return color;
}
