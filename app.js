let body = document.querySelector("body");
let btn = document.getElementById("bt");


let arrayHexValue = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let reverseArrayHexValue = arrayHexValue.reverse();

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};


btn.addEventListener("click", () => {
  let bgcolorValue = ["#"];
  let fgcolorValue = ["#"];

  for (let i = 0; i < 6; i++) {
    bgcolorValue.push(arrayHexValue[randomNumber(1, 16)]);
    fgcolorValue.push(reverseArrayHexValue[randomNumber(1, 16)]);
  }

  body.style.backgroundColor = bgcolorValue.join("");
  btn.style.color= fgcolorValue.join("");
  btn.style.border = `2px solid ${fgcolorValue.join("")}`;

});
