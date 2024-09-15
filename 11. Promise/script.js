/*const ticket = new Promise(function (resolve, reject) {
  const isBoarded = false;
  if (isBoarded) {
    resolve("you are in the flieght");
  } else {
    reject("your flight has been cancelled");
  }
});

ticket
  .then((data) => {
    console.log("wohoo", data);
  })
  .catch((data) => {
    console.log("oh no", data);
  })
  .finally(() => {
    console.log("i will be executed always");
  });
*/

function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🥘";
      resolve(dough);
      // reject("bad cheese");
    }, 2000);
  });
}

function makePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 2000);
  });
}

/*
getCheese()
  .then((cheese) => {
    console.log("here is the cheese", cheese);
    return makeDough(cheese);
  })
  .then((dough) => {
    console.log("here is the dough", dough);
    return makePizza(dough);
  })
  .then((pizza) => {
    console.log("here is the pizza", pizza);
  })
  .catch((data) => {
    console.log("error occured", data);
  })
  .finally(() => {
    console.log("Process ended");
  });

*/

async function orderPizza() {
  try {
    const cheese = await getCheese();
    console.log("here is the cheese", cheese);
    const dough = await makeDough(cheese);
    console.log("here is the dough", dough);
    const pizza = await makePizza(dough);
    console.log("here is the pizza", pizza);
  } catch (error) {
    console.log(error);
  }
}
orderPizza();
