let student = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
];

/*
const newArray = [];
for (let i = 0; i < student.length; i++) {
  if (student[i].id % 2 === 0) {
    newArray.push(student[i]);
  }
}
console.log(newArray);
*/

/*
const newArray = student.filter((curValue, index, array) => {
  if (curValue.sports === "Cricket") {
    return true;
  } else {
    return false;
  }
});

console.log(newArray);
*/

const studentName = student
  .filter((current) => current.sports === "Cricket")
  .map((current, index, array) => {
    return `<li>${current.name}</li>`;
  });

console.log(studentName);

const div = document.querySelector(".container");
div.innerHTML = `<ul>${studentName.join("")}</ul>`;
