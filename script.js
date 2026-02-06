createColumns(16);
createDivs(16);

// create X div column with flex display column
function createColumns(number) {
  const container = document.querySelector("#container");
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.className = "column";
    div.style.flex = "1 1 auto";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    container.appendChild(div);
  }
}

// create X div row per colomn and apply painting

function createDivs(number) {
  const columns = document.querySelectorAll(".column");

  columns.forEach((e) => {
    for (let i = 0; i < number; i++) {
      const div = document.createElement("div");
      div.className = "row";
      div.style.opacity = 0;
      div.style.flex = 1;
      div.style.backgroundColor = "rgb(0 0 0)";

      // painting div
      div.addEventListener("mouseenter", (e) => {
        // random value 0 to 255
        let color = e.target.style.opacity;
        colorNumber = parseFloat(color);
        if (colorNumber < 1) colorNumber += 0.1;

        console.log(colorNumber);
        const rgb1 = randomRGB();
        const rgb2 = randomRGB();
        const rgb3 = randomRGB();
        e.target.style.backgroundColor = `rgb(${rgb1} ${rgb2} ${rgb3})`;
        e.target.style.opacity = colorNumber;
      });

      e.appendChild(div);
    }
  });
}

// modify grid size

function modifiyGridRatio(number) {
  // 1. remove the grid
  removeGrid();
  // 2. create the new grid with X ratio
  createColumns(number);
  createDivs(number);
}

function removeGrid() {
  // remove all rows
  const rows = document.querySelectorAll(".row");
  rows.forEach((e) => {
    e.remove();
  });
  // remove all columns
  const columns = document.querySelectorAll(".column");

  columns.forEach((e) => {
    e.remove();
  });
}

// select the number of squares

button = document.querySelector("button");
button.addEventListener("click", () => {
  value = prompt("choose the number of squares per side");
  valueInt = parseInt(value);
  console.log(valueInt);

  if (valueInt > 100) return alert("more than 100x100 is not alowed");
  if (valueInt === NaN)
    return alert("This is not a number please make an effort ");
  // modify text
  h3 = document.querySelector("#ratioText").textContent =
    "Ratio: " + valueInt + "x" + valueInt;
  // modify the grid Ratio
  modifiyGridRatio(value);
});

// random number 150 to 255
function randomRGB() {
  let random = Math.round(Math.random() * (255 - 150) + 150);
  return random;
}
