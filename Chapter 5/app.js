// Write a program that take two numbers & add them in a new variable. Show the result in your browser
let num1 = 11;
let num2 = 12;
let totalofsum = num1+num2

document.write("<h3> Arithematic Operations using Variables </h3>")
document.write("Sum of " + num1 + " and " + num2 + " is " + totalofsum)

// Repeat task1 for subtraction, multiplication, division & modulus.
let totalofsub = num1-num2
let totalofmul = num1*num2
let totalofdiv = num1/num2
let totalofmod = num1%num2
document.write("</br>Subtraction of " + num1 + " from " + num2 + " is " + totalofsub)
document.write("</br>Multiplication of " + num1 + " and " + num2 + " is " + totalofmul)
document.write("</br>Division of " + num1 + " by " + num2 + " is " + totalofdiv)
document.write("</br>Modulus of " + num1 + " and " + num2 + " is " + totalofmod)

// Do the following using JS Mathematic Expressions
// a. Declare a variable.
let shah

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("<h3> Post Increament & Post Decreament Practice </h3>")
document.write("<br>Value after variable declaration is: " + shah + "<br>");

// c. Initialize the variable with some number
shah = 5;

// d. Show the initial value of variable in your browser
document.write("Initial value: " + shah + "<br>");

// e. Increment the variable
shah++;

// f. Show the value of variable after increment
document.write("Value after increment is: " + shah + "<br>");

// g. Add 7 to the variable
shah += 7;

// h. Show the value of variable after addition
document.write("Value after addition is: " + shah + "<br>");

// i. Decrement the variable
shah--;

// j. Show the value of variable after decrement
document.write("Value after decrement is: " + shah + "<br>");

// k. Show the remainder after dividing the variable’s value by 3
let reminder = shah % 3;

// l. Output the remainder
document.write("The reminder is: " + reminder);

// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
let ticketcost = 600
let quantity = +prompt("Enter quantity of tickets")
let totalprice = ticketcost*quantity

document.write("<h3> Movie Tickets / Bill </h3>")
document.write("<br>Total cost to buy " + quantity + " tickets to a movie is " + totalprice + "PKR" + "<br>")

// Write a script to display multiplication table of any number in your browser. E.g
let tablenum = +prompt("Enter the Number for Table")
let table1 = tablenum*1
let table2 = tablenum*2
let table3 = tablenum*3
let table4 = tablenum*4
let table5 = tablenum*5
let table6 = tablenum*6
let table7 = tablenum*7
let table8 = tablenum*8
let table9 = tablenum*9
let table10 = tablenum*10



document.write("<h3>Table of " + tablenum + "</h3>")
document.write(tablenum + " X " + " 1 " + " = " + table1 + "<br>")
document.write(tablenum + " X " + " 2 " + " = " + table2 + "<br>") 
document.write(tablenum + " X " + " 3 " + " = " + table3 + "<br>") 
document.write(tablenum + " X " + " 4 " + " = " + table4 + "<br>") 
document.write(tablenum + " X " + " 5 " + " = " + table5 + "<br>") 
document.write(tablenum + " X " + " 6 " + " = " + table6 + "<br>") 
document.write(tablenum + " X " + " 7 " + " = " + table7 + "<br>") 
document.write(tablenum + " X " + " 8 " + " = " + table8 + "<br>") 
document.write(tablenum + " X " + " 9 " + " = " + table9 + "<br>") 
document.write(tablenum + " X " + " 10 " + " = " + table10 + "<br>") 


// The Temperature Converter: Conversion Formulae:
// Celsius = (fahrenheit-32)*5/9
// fahrenheit = (Celsius*9/5)+32
document.write("<h3> Temperature Converter </h3>")
let celsius  = +prompt("Computation for celsius  to fahrenheit\nEnter celsius  Value or Temperature")
let calculation1 = (celsius *9/5)+32
let fahrenheit  = +prompt("Computation for fahrenheit  to celsius\nEnter fahrenheit  Value or Temperature")
let calculation2 = (fahrenheit - 32)*5/9

// Celsius to fahrenheit
document.write("Celsius to Fahrenheit </br>")
document.write("<sup>0</sup>F = (<sup>0</sup>C * 9 / 5) + 32 </br>")
document.write("<sup>0</sup>F = " + calculation1 + "<sup>0</sup> </br>")

// fahrenheit to celsius
document.write("Fahrenheit to Celsius </br>")
document.write("<sup>0</sup>C = (<sup>0</sup>F - 32) * 5 / 9 </br>")
document.write("<sup>0</sup>C = " + calculation2 + "<sup>0</sup> </br>")

// Shopping Card
let item1 = 2300
let item2 = 1800
let qty1 = +prompt("Enter order quantity of item 1\n cost is 2300/item1")
let qty2 = +prompt("Enter order quantity of Item 2\n cost is 1800/item2")
let shipping = 230
let total1 = item1*qty1
let total2 = item2*qty2
let grandtotal = total1+total2+shipping

// calculations
document.write("<h3> Shopping Card</h3>")
document.write("Price of Item 1 is " + item1 + "<br>")
document.write("Order quantity of Item 1 is " + qty1 + "<br>")
document.write("Price of Item 2 is " + item2 + "<br>")
document.write("Order quantity of Item 2 is " + qty2 + "<br>")
document.write("Shipping Charges is " + shipping + "<br>")
// grandtotal
document.write("<b>Grand Total of your order is " + grandtotal + "</b><br>")


// mark sheet
let obtain = +prompt("Enter your obtained marks")
let totalmarks = +prompt("Enter your total marks")
let percentage = obtain/totalmarks*100

document.write("<h3>Marks Sheet</h3>")
document.write("Your Percentage is " + percentage + "%" + "<br>")

// Currency Calculations
let dollars = +prompt("Enter dollars you have to convert it into PKR ")
let saudiriyal = +prompt("Enter saudi riyal you have to convert it into PKR ") 
let doltopkr = dollars*275.87
let ryltopkr = saudiriyal*73.56
let currencytotal = doltopkr+ryltopkr

document.write("<h3>Currency in PKR</h3>")
document.write("You have " + currencytotal + " PKR")


