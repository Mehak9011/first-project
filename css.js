// Algorithm
// Initialization:

// HTML and CSS set up the layout and appearance.
// JavaScript is loaded for functionality.
// Button Input (onclick):

// When a button is clicked, the display(val) function appends its value to the input field.
// Example:
// Clicking 2 appends 2 to the input field.
// Clicking + after 2 appends the +.
// Keyboard Input (onkeydown):

// A global event listener detects key presses.
// If the key is a valid number or operator, it calls display(key) to append it to the input field.
// Special keys:
// Enter: Calls calculate() to evaluate the expression.
// Backspace: Removes the last character from the input field.
// Evaluate Expression (calculate):

// When the equals (=) button or Enter key is pressed:
// The calculate() function reads the current expression from the input field.
// Uses eval() to compute the result.
// Displays the result in the input field.
// Clear Input (clearResult):

// Clears the input field when the C button is pressed.
// Error Handling:

// If eval() fails (e.g., due to an invalid expression), an error message is displayed.








      
//    // Function to display value
//    function display(val) {
//     document.getElementById("result").value += val;
// }

// // Function to evaluate the expression and return result
// function calculate() {
//     try {
//         let input = document.getElementById("result").value;
//         let result = eval(input); // Evaluate the input string
//         document.getElementById("result").value = result;
//     } catch (e) {
//         document.getElementById("result").value = "Error";
//     }
// }

// // Function to clear the display
// function clearResult() {
//     document.getElementById("result").value = "";
// }

// // Function to handle keyboard input
// function handleKeyboard(event) {
//     const key = event.key;

//     // Check for numbers, operators, or Enter/Backspace keys
//     switch (key) {
//         case "0":
//         case "1":
//         case "2":
//         case "3":
//         case "4":
//         case "5":
//         case "6":
//         case "7":
//         case "8":
//         case "9":
//         case "+":
//         case "-":
//         case "*":
//         case "/":
//         case ".":
//             display(key);
//             break;
//         case "Enter":
//             calculate();
//             break;
//         case "Backspace":
//             const currentValue = document.getElementById("result").value;
//             document.getElementById("result").value = currentValue.slice(0, -1);
//             break;
//         default:
//             break; // Ignore other keys
//     }
// }

// // Add event listener for keyboard input
// document.addEventListener("keydown", handleKeyboard);




















  
// // program to create a simple calculator using the if...else...if in JavaScript.  
// // take the operator from the user through prompt box in JavaScript.  
// const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// // accept the number from the user through prompt box  
// const number1 = parseFloat(prompt ('Enter the first number: '));  
// const number2 = parseFloat(prompt ('Enter the second number: '));  
  
// let result; // declaration of the variable.  
  
// // use if, elseif and else keyword to define the calculator condition in JavaScript.  
// if (operator == '+') { // use + (addition) operator to add two numbers  
//     result = number1 + number2;  
// }  
// else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
//     result = number1 - number2;  
// }  
// else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
//     result = number1 * number2;  
// }  
// else {  
//     result = number1 / number2; // use / (division) operator to divide two numbers  
// }  
  
// // display the result of the Calculator  
// window.alert(" Result is" + result);  




// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");
//   console.log("My father is " + myFather.firstName + ".");

//   // Display age
// //   document.getElementById("demo").innerHTML =
// //   "My father is " + myFather.age + "."; 

// Function declaration 
// function add(a, b) {         
//   console.log(a + b);
// }

// // Calling a function
// add(2, 3);






//for Each loop  array  
// var txt = "";
// var numbers = [45, 4, 9, 16, 25];

// // Iterate over the array using forEach and call myFunction for each element
// numbers.forEach(myFunction);

// // Print the output to the console
// console.log(txt);

// function myFunction(value) {
//   // Append the current number to the txt string with a line break
//   txt = txt + value + "\n";  // Use "\n" for a new line in the console
// }


// ARRAY as array
// function myFunction() {
//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
//   var x = Array.isArray(fruits);  // Check if 'fruits' is an array
//   console.log(x);  // Print the result to the console
// }

// myFunction();  // Call the function to execute it







//MAP()

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// console.log(numbers2);

// function myFunction(value, index, array) {
//   return value / 2;        // any oprator use this  function:+,-,* ect.;
// }

//filte()

// var numbs = [45, 4, 9, 16, 25];
// var over18 = numbs.filter(myFunction);

// console.log( over18);

// function myFunction(value, index, array) {
//   return value > 18;
// }




//Array reduce()

// Define the array of numbers
// var numbers = [45, 4, 9, 16, 25];

// // Define the operator (can be '+', '-', '*', '/')
// var operator = "*"; // You can change this to '-', '*', or '/'

// // Use reduce to calculate the result based on the operator
// var result = numbers.reduce(myFunction);

// // Display the result
// console.log("The result is " + result);

// function myFunction(total, value) {
//   // Based on the operator, perform the respective operation
//   if (operator === "+") {
//     return total + value;  // Addition
//   } else if (operator === "-") {
//     return total - value;  // Subtraction
//   } else if (operator === "*") {
//     return total * value;  // Multiplication
//   } else if (operator === "/") {
//     return total / value;  // Division
//   } else {
//     return total + value;  // Default to addition
//   }
// }




//function Parameter Values

// function myFunction(x, y) {
//   if (y === undefined) {
//     y = 2;  // If y is not provided, set y to 2.
//   }  
//   return x + y;  // Return the product of x and y.
// }

// console.log(myFunction(8));  // Logs the result of 4 * 2, which is 8




let text1 = "What a very ";
text1 += "nice day";
console.log(text10);