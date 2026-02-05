const container = document.querySelector("#container");
// painting div

// create 16 div column with flex display column
for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.className = "column";
  div.style.flex = "1 1 auto";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  container.appendChild(div);
}

// create 16 div row per colomn
const columns = document.querySelectorAll(".column");

columns.forEach((e) => {
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.className = "row";
    div.addEventListener("mouseenter", () => {
      div.className = "over";
    });
    div.addEventListener("mouseleave", () => {
      div.className = "row";
    });
    e.appendChild(div);
  }
});

// select the number of squares

button = document.querySelector("button");
button.addEventListener("click", () => {
  value = prompt("choose the number of squares per side");
  valueInt = parseInt(value);
  console.log(valueInt);
});
