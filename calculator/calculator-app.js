// Calculator | Arithmetic Operations
// Addition with var variable

// Input Fields
var myname = prompt("Enter your Name")
var num1 = +prompt("Requried the number for operations")
var num2 = +prompt("Requried one more number for operations")

// Sum Result
document.write("<h3>Dear, " + myname + "<br></h3>");
document.write("Sum of " + num1 + " and " + num2 + " equals " + (num1 + num2) + "<br>");

// Subtraction Result
document.write("Subtraction of " + num1 + " from " + num2 + " equals " + (num1 - num2) + "<br>");

// Multiplication Result
document.write("Multiplication of " + num1 + " and " + num2 + " equals " + (num1 * num2) + "<br>");


// Division Result
document.write("Division of " + num1 + " by " + num2 + " equals " + (num1 / num2) + "<br>");


// Modulus Result
document.write("Modulus of " + num1 + " and " + num2 + " equals " + (num1 % num2) + "<br>");



Swal.fire({
    title: "Your Operations Has been done!",
    text: "You may click the button to see the Result",
    icon: "success"
  });