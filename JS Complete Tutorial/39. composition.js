/* Composition -> Makes the code DRY (Rescues from the problem with Inheritance) */
// Function to composite the methods
const prepareFunc = () => {
  return { prepareMeth: () => console.log(`Preparing...`) };
};
const readyFunc = () => {
  return { readyMeth: () => console.log(`Ready!!!`) };
};
const bakeFunc = () => {
  return {
    // 'function' keyword makes the 'this' to point to the current object
    bakeMeth: function () {
      console.log(
        `Baking... Pizza with Size ${this.size}, Crust ${this.crust}, Sauce ${this.sauce}, Toppings ${this.toppings}`
      );
    },
  };
};
const toss = () => {
  return {
    // Arrow Function makes the 'this' to point to 'window' Object
    toss: () =>
      console.log(
        `Tossing... Salad with Size ${this.size}, Dressing ${this.dressing}`
      ),
    // toss: function () {
    //   console.log(
    //     `Tossing... Salad with Size ${this.size}, Dressing ${this.dressing}`
    //   );
    // },
  };
};
const stuffFunc = () => {
  return { stuffMeth: () => console.log(`Stuffing the crust`) };
};
const butter = () => {
  return { butter: () => console.log(`Buttering the crust`) };
};

const createSalad = (sizeComp, dressing) => {
  console.log(`Salad with Size ${sizeComp}, Dressing ${dressing}`);
  return {
    size: sizeComp,
    dressing,
    ...prepareFunc(),
    ...toss(),
    ...readyFunc(),
  };
};

// const saladObj = createSalad("side", "ranch");
// saladObj.prepareMeth();
// saladObj.toss();
// saladObj.readyMeth();
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const createPizza = (sizeComp, crustComp, sauce) => {
  const pizza = {
    size: sizeComp,
    crust: crustComp,
    sauce,
    topping: [],
  };
  console.log(
    `Pizza with Size ${sizeComp}, Crust ${pizza.crust}, Sauce ${sauce}, Toppings ${pizza.topping}`
  );
  return {
    // pizza,
    ...pizza,
    // prepareFunc(),
    ...prepareFunc(),
    // ...bake(),
    ...bakeFunc(),
    // ...readyMeth(),
    ...readyFunc(),
  };
};

// Similar to ES6 Class Syntax with 'extends' and 'super(0)'
const createStuffedButteredCrustPizza = (pizza) => {
  console.log(
    `Stuffed Buttered Pizza with Size ${pizza.size}, Crust ${pizza.crust}, Sauce ${pizza.sauce}, Toppings ${pizza.topping}`
  );
  return {
    ...pizza,
    ...stuffFunc(),
    ...butter(),
  };
};

const addTopping = (pizza, toppings) => {
  pizza.topping.push(toppings);
  console.log(`Topping ${toppings} Added`);
  return pizza;
};

// Function Composition -> Clone the Object using Shallow Copy to avoid Mutation
const shallowPizzaClone = (func) => {
  return (obj, array) => {
    const newObj = { ...obj };
    return func(newObj, array);
  };
};

// Curry Function
// const shallowPizzaClone = (func) => (obj, array) => func({ ...obj }, array);

// 'let' is used so as to reassign and decorate
let addToppingPure = (pizza, toppings) => {
  pizza.topping = [...pizza.topping, toppings];
  // pizza.topping = [...pizza.topping, ...toppings];
  return pizza;
};

// Decorate 'addToppingPure' function with 'shallowPizzaClone' function by reassigning it
addToppingPure = shallowPizzaClone(addToppingPure);

const pizzaObj = createPizza("6", "Cheese", "Chilly");
console.log("pizzaObj  ---> ", pizzaObj);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
const pizzaObjStuffButter = createStuffedButteredCrustPizza(pizzaObj);
console.log("pizzaObjStuffButter  ---> ", pizzaObjStuffButter);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
addTopping(pizzaObjStuffButter, "Pepperoni");
// Original Object is mutated due to Impure Function
console.log("pizzaObjStuffButter with Topping 1  ---> ", pizzaObjStuffButter);
addTopping(pizzaObjStuffButter, "Chilli Flakes");
console.log("pizzaObjStuffButter with Topping 2  ---> ", pizzaObjStuffButter);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const pizzaStuffedButteredCrustComposition = createStuffedButteredCrustPizza(
  createPizza(4, "Chicken", "Chilly")
);
console.log(
  "pizzaStuffedButteredCrustComposition  ---> ",
  pizzaStuffedButteredCrustComposition
);
pizzaStuffedButteredCrustComposition.prepareMeth();
pizzaStuffedButteredCrustComposition.bakeMeth();
pizzaStuffedButteredCrustComposition.stuffMeth();
pizzaStuffedButteredCrustComposition.butter();
pizzaStuffedButteredCrustComposition.readyMeth();
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
let pizzaStuffedButteredCrustToppings1 = addToppingPure(
  pizzaStuffedButteredCrustComposition,
  ["Olives", "Cheese"]
);
console.log(
  "pizzaStuffedButteredCrustToppings1  ---> ",
  pizzaStuffedButteredCrustToppings1
);
pizzaStuffedButteredCrustToppings1 = addToppingPure(
  pizzaStuffedButteredCrustToppings1,
  ["Pepperoni", "Chilli Flakes"]
);
console.log(
  "pizzaStuffedButteredCrustToppings1 (after reassignment and updation of toppings) ---> ",
  pizzaStuffedButteredCrustToppings1
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
let pizzaStuffedButteredCrustToppings2 = addToppingPure(
  pizzaStuffedButteredCrustComposition,
  ["Pepperoni", "Chilli Flakes"]
);
console.log(
  "pizzaStuffedButteredCrustToppings2  ---> ",
  pizzaStuffedButteredCrustToppings2
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
let pizzaStuffedButteredCrustToppings3 = addToppingPure(
  pizzaStuffedButteredCrustComposition,
  ["Olives", "Cheese"]
);
console.log(
  "pizzaStuffedButteredCrustToppings3  ---> ",
  pizzaStuffedButteredCrustToppings3
);
pizzaStuffedButteredCrustToppings3 = addToppingPure(
  pizzaStuffedButteredCrustToppings2,
  ["Pepperoni", "Chilli Flakes"]
);
console.log(
  "pizzaStuffedButteredCrustToppings3 (after reassignment and updation of toppings) ---> ",
  pizzaStuffedButteredCrustToppings3
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "pizzaStuffedButteredCrustToppings2 (not mutated)  ---> ",
  pizzaStuffedButteredCrustToppings2
);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(
  "pizzaStuffedButteredCrustComposition (not mutated)  ---> ",
  pizzaStuffedButteredCrustComposition
);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
