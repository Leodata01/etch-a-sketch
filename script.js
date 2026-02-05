const container = document.querySelector("#container");

// create X div column with flex display column
function createColumns(number) {
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
      // painting div
      painting(number);
      e.appendChild(div);
    }
  });
}

function painting(number) {
  columns.forEach((e) => {
    for (let i = 0; i < number; i++) {
      div.addEventListener("mouseenter", () => {
        div.className = "over";
      });
      div.addEventListener("mouseleave", () => {
        div.className = "row";
      });
    }
  });
}

// select the number of squares

button = document.querySelector("button");
button.addEventListener("click", () => {
  value = prompt("choose the number of squares per side");
  valueInt = parseInt(value);
  if (valueInt === NaN) {
    alert("bro this is not a numbe, try again");
  }
  h3 = document.querySelector("#ratioText").textContent =
    "Ratio: " + valueInt + "x" + valueInt;
  return valueInt;
});

topDiv = document.querySelector(".top");
