// const myFunction = () => {
//   console.log("i was clicked");
// };

// const mouseOver = () => {
//   console.log("on mouse over");
// };

// const Keypress = () => {
//   console.log("key pressed");
// };

// const keyUpEvent = () => {
//   console.log("key up function was called");
// };
// const keyDownEvent = () => {
//   console.log("key down function was called");
// };

// event listener

// const box1 = document.getElementById("box1");
// box1.addEventListener("click", () => {
//   console.log("click by event");
// });

// box1.addEventListener("click", () => {
//   console.log("click by event 2");
// });

// box1.addEventListener("mousemove", (e) => {
//   console.log(e.clientX, e.clientY);
// });

// const nameInput = document.getElementById("name-input");
// nameInput.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

// nameInput.addEventListener("focus", (e) => {
//   console.log("key", e);
// });

const parent = document.getElementById("container");
const box1 = document.getElementById("box1");

parent.addEventListener(
  "click",
  () => {
    console.log("parent click");
  }
  // true
);

box1.addEventListener(
  "click",
  () => {
    console.log("child click");
  }
  // true
);
