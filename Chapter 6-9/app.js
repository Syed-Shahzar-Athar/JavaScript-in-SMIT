// // Post Increament & Decreament
let a = +prompt("Enter a number") 

document.write("Result: <br>")
document.write("The value of a is: " + a)
document.write("<hr>")

document.write("The value of ++a is: " + (++a) + "<br>")
document.write("Now the value of a is: " + a + "<br>")

document.write("<br><br>The value of a++ is: " + (a++) + "<br>")
document.write("Now the value of a is: " + a + "<br>")

document.write("<br><br>The value of --a is: " + (--a) + "<br>")
document.write("Now the value of a is: " + a + "<br>")

document.write("<br><br>The value of a-- is: " + (a--) + "<br>")
document.write("Now the value of a is: " + a + "<br>")

// Write a program that takes input from user & greet the user
let greet = prompt("Enter your full name ")
document.write("<br><br>Hello! Mr./Mrs " + greet + "<br>")


// // Write a program for the table
let tablenum = +prompt("Enter the Number for Table") || 5
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


// Marks Sheet for three subjects
let subject1 = prompt("Enter Subject Name")
let subject2 = prompt("Enter Subject Name")
let subject3 = prompt("Enter Subject Name")
let subject1Marks = +prompt("Subject1\nObtained Marks")
let subject2Marks = +prompt("Subject2\nObtained Marks")
let subject3Marks = +prompt("Subject3\nObtained Marks")
let totalMarks = 100
let percentagesubject1 = (subject1Marks / totalMarks * 100)
let percentagesubject2 = (subject2Marks / totalMarks * 100)
let percentagesubject3 = (subject3Marks / totalMarks * 100)
let tottotal = 300
let obttotal = subject1Marks+subject2Marks+subject3Marks
let totPercentage = (obttotal/tottotal)*100


document.write("<table style border=1px solid><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + subject1Marks + "</td><td>" + percentagesubject1 + "%</td></tr><tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + subject2Marks + "</td><td>" + percentagesubject2 + "%</td></tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + subject3Marks + "</td><td>" + percentagesubject3 + "%</td><tr><td><td><b>" + tottotal + "</b></td></td><td><b>" + obttotal + "</b></td><td><b>" + totPercentage + "%</b></td></tr></table>");


