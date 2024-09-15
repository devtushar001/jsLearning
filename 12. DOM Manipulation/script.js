// const myBody = document.body;
// myBody.style.backgroundColor = "red";

// const box2 = document.getElementById("box-2");
// // console.log(box2);

// const divs = document.getElementsByTagName("div");

// console.log(divs);

// const boxes = document.getElementsByClassName("box");
// console.log(boxes);

// const randomBoxes = document.getElementsByClassName("random");
// console.log(randomBoxes);

// const random = document.querySelectorAll(".box");
// console.log(random);

//

const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");
const box4 = document.getElementById("box-4");
const box5 = document.getElementById("box-5");
const box6 = document.getElementById("box-6");
// box1.inerHTML = "<h1>Hello</h1>"
box1.style.backgroundColor = "lightblue";
let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].classList.add("round-border");
  console.log(boxes[i]);
}

// box1.classList.remove("round-border");
box1.classList.toggle("box");

const newPara = document.createElement("p");
newPara.classList.add("box");
newPara.innerText = "This is brand new";

const container = document.getElementById("container");

container.appendChild(newPara);
