// TODO: Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 -> the parameter. You must check if the parameter is an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure to test your code effectively.
function sum(num) {
  if (typeof num !== 'number') {
    return "The value passed is not a number";
  }
  let total = 0 ;
  for (let i = 0 ; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(sum(100)); // Output: 5050
console.log(sum('hello')); // Output: The value passed is not a number

 // TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
 function factorial(num) {
  if (typeof num !== 'number') {
    return "The value passed is not a number";
  }
  if (num < 0) {
    return "Please enter a non-negative number";
  }
  let total = 1;
  for (let i = 1; i <= num; i++){
    total *= i;
  }
  return total;
 }

 console.log(factorial(4)); // Output: 24
 console.log(factorial(-1)); // Output: Please enter a non-negative number
 console.log(factorial('hello')); // Output: The value passed is not a number

// TODO: Create a function called funkyMath . If this function is called with 2 arguments the function will subtract the first from the second. If the functionis called with 3 arguments it will add all 3 numbers together. If the function is called with 4 arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide  them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(...args) {
  if (args.length === 2) {
    return args[1] - args[0];
  }

  else if (args.length === 3) {
    return args[0] + args[1] + args[2];
  }

  else if (args.length === 4) {
    return (args[0] + args[1])/(args[2] + args[3]);
  }
}

console.log(funkyMath(8, 2)); // Output: 6
console.log(funkyMath(1, 2, 3)); // Output: 6
console.log(funkyMath(8, 2, 3, 5)); // Output: 1.25


// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
  oddNumbers.sort((a, b) => a - b);
}

console.log(oddNumbers); // Output: [1, 33, 45]

// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {
  firstName: "Azhar",
  lastName: "Manie",
  age: "24",
  favouriteColour: "Green",
  dreamCar: "Audi A3",
}

console.log(me); // Output: { firstName: 'Azhar', lastName: 'Manie', age: '24', favouriteColour: 'Green', dreamCar: 'Audi A3' }

// TODO: Create and add a new property and value of ‘favourite food’ to the object. 
me.favouriteFood = "Zinger Wings";

console.log(me); // Output: { firstName: 'Azhar', lastName: 'Manie', age: '24', favouriteColour: 'Green', dreamCar: 'Audi A3', favouriteFood: 'Zinger Wings' }

// TODO: . Now delete the age property from the object.
delete me.age;

console.log(me); // Output: { firstName: 'Azhar', lastName: 'Manie', favouriteColour: 'Green', dreamCar: 'Audi A3', favouriteFood: 'Zinger Wings' }