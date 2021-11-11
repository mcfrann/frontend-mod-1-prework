// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Declare function named buildABear with dynamic parameters name, age, fur, clothes
//specialPower
function buildABear(name, age, fur, clothes, specialPower) {
//declare variable greeting assigned to string interpolated with name parameter
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//declare variable demographics assigned to name and age parameters
  var demographics = [name, age];
//declare variable powerSaying assigned to string concatenated with specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?";
//declare object builtBear
  var builtBear = {
//key basicInfo assigned to dynamic demographics parameter
    basicInfo: demographics,
//key clothes assigned to dynamic clothes parameter
    clothes: clothes,
//key exterior assigned to dynamic fur parameter
    exterior: fur,
//key cost assigned to static integer 49.99
    cost: 49.99,
//key sayings assigned to array including greeting variable, powerSaying variable, and string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//key isCuddly assigned to static boolean value true
    isCuddly: true,
  };
//method to return the value of the object builtBear
  return builtBear
}
//first called function with arguments plugged in to the function's parameters
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//second called function with arguments plugged in to the function's parameters
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//declare function named fizzBuzz with dynamic parameters num1, num2, range
function fizzBuzz(num1, num2, range) {
//start for loop, make loop condition(counter)
  for (var i = 0; i <= range; i++) {
//if statement made with condition
    if (i % num1 === 0 && i % num2 === 0) {
//code executed during loop if condition in () proves true
      console.log('fizzbuzz');
//else if statment made with new condition
    } else if (i % num1 === 0) {
//code executed if new condition in () proves true
      console.log('fizz');
//another else if statement made with new condition
    } else if (i % num2 === 0) {
//code executed if new condition in () proves true
      console.log('buzz');
//else statement made
    } else {
//code exectuted if none of the above conditions prove true
      console.log(i);
    }
  }
}

//first called function with arguments plugged into the parameters
fizzBuzz(3, 5, 100);
//second called function with arguments plugged into the parameters
fizzbuzz(5, 8, 400);
