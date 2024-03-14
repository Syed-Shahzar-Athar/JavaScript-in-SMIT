// Decalaration of Variable in one statement
let a=1, b=2, c=3;
console.log(a,b,c)



document.write("<b>Ans1: you can see Decalaration of Variable in one statement in console</b></br></br>")

// Names of 5 legal variables
let myVar
let $Shahzar
let _Syed
let Ali123
let syedShahzar
console.log(myVar)
console.log($Shahzar)
console.log(_Syed)
console.log(Ali123)
console.log(syedShahzar)




document.write("<b>Ans2:</b>")
document.write("<h3> 5 Legal Variables Names </h3>")
document.write("<ul><li>myVar</li><li>_variable</li><li>Syed123</li><li>$Shahzar</li><li>camelCaseVariable</li></ul>")
document.write("<b>You can see declaration in console</b></br>")
document.write("<i>Note: Remember it is only declaration so the anwer will be undefined</i>")


// 5 illegal variables
// let 123Shah
// let my-var
// let &Shahzar
// let var
// let let
// We cannot uncomment it because of rendering error while console it.






document.write("<h3> 5 Illegal Variables Names </h3>")
document.write("<ul><li>123Shah</li>(cannot start by a number)<li>my-var</li>(cannot contain hyphens or special characters)</li><li>&Shahzar</li>(cannot start from special characters except '_' , '$')</li><li>var</li>(Reserved keyword)<li>let</li>(Reserved keyword)</ul>")
document.write("<b>You can see declaration in console</b></br>")
document.write("<i>Note: Remember it is only declaration so the anwer will be undefined</i>")



// Qno 3 Display below data on browser
document.write("<h1>Rules for naming JS variables</h1>")
let dollar = "$";
let number = "numbers";
let underscore = "_";
let case_sensitive = "sensitive";
let JSkeywords = "keywords";
let letter = "letter";

document.write("Variable names can only contain " + number + "," + dollar + " and " + underscore);
document.write("</br>Variable must begin with a " + letter + " " + dollar + " or " + underscore);
document.write("</br>Variable names are case " + case_sensitive);
document.write("<br/>Variable name should not be JS " + JSkeywords);