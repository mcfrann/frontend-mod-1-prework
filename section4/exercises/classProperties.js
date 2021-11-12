/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
  constructor() {
// no properties yet
  }
}

var sparky = new Dog();
console.log(sparky);

var fido = new Dog();
console.log(fido);

// Prompt 2: Snack
class Snack {
  constructor() {

  }
}

var chips = new Snack();
console.log(chips)
var cookies = new Snack();
console.log(cookies);

// Prompt 3: Shirt
class Shirt {
  constructor() {

  }
}

var tee = new Shirt();
console.log(tee);
var longSleeve = new Shirt();
console.log(longSleeve);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class DogTwo {
  constructor() {
    this.breed = "Australian Shepherd";
    this.age = 4;
    this.weight = "56 lbs";
    }
}

var max = new DogTwo();
console.log(max);


// Prompt 2: Snack
class SnackTwo {
  constructor() {
    this.type = "sweet";
    this.healthy = false;
    this.caloriesPerServing = 220;
  }
}

var candyBar = new SnackTwo();
console.log(candyBar);

// Prompt 3: Shirt
class ShirtTwo {
  constructor() {
    this.sleeves = "short";
    this.color = "black and white";
    this.fabric = "cotton";
  }
}

var myShirt = new ShirtTwo();
console.log(myShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DogThree {
  constructor(breed, age, weight) {
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    }
}

var max = new DogThree("Australian Shepard", 4, "56 lbs");
console.log(max);
var jake = new DogThree("Pomeranian", 6, "16 lbs");
console.log(jake);

// Prompt 2: Snack
class SnackThree {
  constructor(type, healthy, calories) {
    this.type = type;
    this.healthy = healthy;
    this.caloriesPerServing = calories;
  }
}

var candyBar = new SnackThree("sweet", false, 220);
console.log(candyBar);
var carrotsWithHummus = new SnackThree("savory", true, 170);
console.log(carrotsWithHummus);

// Prompt 3: Shirt
class ShirtThree {
  constructor(sleeves, color, fabric) {
    this.sleeves = sleeves;
    this.color = color;
    this.fabric = fabric;
  }
}

var myShirt = new ShirtThree("short", "black and white", "cotton");
console.log(myShirt);
var hisShirt = new ShirtThree("long", "red", "silk");
console.log(hisShirt);
