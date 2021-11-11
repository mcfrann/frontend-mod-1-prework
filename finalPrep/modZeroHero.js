// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Super Man";
var specialAbility = "Bullet proof chest";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Greetings!";
var catchphrase = "Truth, justice, and the American way.";

// Declare two variables - power AND energy - set to integers

var power = 100;
var energy = 90;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Lex Luther", "Brainiac", "Bizarro"];
var sidekicks = ["Batman", "The Justice League", "Krypto the Superdog"];

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Darkseid");

// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.");
  } else {
    console.log(saveTheDay);
  }
}

var dangerLevel = 80;
var saveTheDay = "Mission accomplished!";
var badExcuse = "Looks like a job for Batman...";
assessSituation(dangerLevel, saveTheDay, badExcuse);

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Sully",
  smell: "garbage",
  weight: 400,
  citiesDestroyed: ["Barcelona", "Berlin", "Paris"],
  luckyNumbers: [4, 22, 13],
  address: {number: 14, street: "Speere", state: "Texas", zip: 80334}
}

console.log(scaryMonster);


// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class

class SuperHero {
  constructor(name, superpower, age) {
    this.name = (name);
    this.superpower = (superpower);
    this.age = (age);
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName(name) {
    console.log(name);
  }
  maximizeEnergy() {
    this.energyLevel = 1000;
  }
  gainPower(number) {
    console.log(number + this.powerLevel);

  }
}

var spiderman = new SuperHero("Spiderman", "spidey senses", 18);
console.log(spiderman);

spiderman.maximizeEnergy();
console.log(spiderman);

var wonderWoman = new SuperHero("Wonder Woman", "magic lasso", 25);
console.log(wonderWoman);
wonderWoman.sayName("Wonder Woman");
wonderWoman.gainPower(300);



// Reflection
// What parts were most difficult about this exerise?
// I definitely need to work on memorizing the distinctions in syntax between
// functions, objects, and classes. Referring to my notes to see if I need a
// semicolon versus a comma, a = vs a :, etc. takes up a lot of time and I
// want it to be muscle memory.

// What parts felt most comfortable to you?
// Assigning and reassigning variables along with manipulating arrays through code
// feel pretty easy at this point!

// What skills do you need to continue to practice before starting Mod 1?
// I need to get super comfortable with static vs. dynamic ways of writing code,
// as I feel like the dynamic way allows for more opportunity to miss certain bits of code.
