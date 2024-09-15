// Synchronous code
console.log("hello");
console.log("world");
console.log("three");

// Asychronous code
const asynchronous = () => {
  console.log("This will execute later");
};

setTimeout(asynchronous, 3000);

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🤢";
    console.log(cheese);
    callback(cheese);
  }, 2000);
}

getCheese((cheese) => {
  console.log("got the cheese", cheese);
});

// Pizza -> dough -> cheese

function hello(s) {
  return s + s;
}

console.log(hello(6));
