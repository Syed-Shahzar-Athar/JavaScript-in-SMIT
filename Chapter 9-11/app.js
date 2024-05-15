// let userInput = prompt("Enter city name").toLowerCase();
// let arr = ["karachi", "islamabad", "lahore", "kashmir", "multan"];

// if (arr.includes(userInput)) {
//     if (userInput === "karachi") {
//         console.log("Welcome to the city of lights");
//     } else if (userInput === "lahore") {
//         console.log("Welcome to the heart of Pakistan");
//     } else if (userInput === "kashmir") {
//         console.log("Welcome to the paradise on earth");
//     } else if (userInput === "multan") {
//         console.log("Welcome to the city of saints");
//     } else {
//         console.log(`Welcome to ${userInput}`);
//     }
// } else {
//     console.log(`Sorry, ${userInput} is not in our list of cities.`);
// }


// City Welcoming Program
let userInput = prompt("Enter city name").toLowerCase();
let arr = ["karachi", "islamabad", "lahore", "kashmir", "multan", "gilgit"];

let cityFound = false;

for (let i = 0; i < arr.length; i++) {
    if (userInput === arr[i]) {
        cityFound = true;
        if (userInput === "karachi") {
            console.log("Welcome to the city of lights");
        } else if(userInput==="islamabad"){
            console.log("Welcome to the Capital of Pakistan");
        } else if (userInput === "lahore") {
            console.log("Welcome to the heart of Pakistan");
        } else if (userInput === "kashmir") {
            console.log("Welcome to the paradise on earth");
        } else if (userInput === "multan") {
            console.log("Welcome to the city of saints");
        } else {
            console.log(`Welcome to ${userInput}`);
        }
        break;
    }
}

if (!cityFound) {
    console.log(`Sorry, ${userInput} is not in our list of cities.`);
}
// City Welcoming Program End


// Gender Greeting Program
let yourName = prompt("Enter your name").toLowerCase();
let gender = prompt("Enter your gender").toLowerCase();
let arr1 = ["male", "female"];

if(arr1.includes(gender)){
    if(gender==="male"){
        console.log(`Good Morning Sir, ${yourName}`)
    }
    else if(gender==="female"){
        console.log(`Good Morning Ma'am, ${yourName}`)
    }
}
else{
    console.log(`${yourName}, ${gender} is not present in our list`)
}
// Gender Greeting Program End

// Traffic Signal Program
let trafficSignal = prompt("Enter a traffic signal color you see").toLowerCase();
let arrSignal = ["red", "yellow", "green"];

if(arrSignal.includes(trafficSignal)){
    if(trafficSignal==="red"){
        document.write("Must Stop <br>");
    }
    else if(trafficSignal==="yellow"){
        document.write("Ready to move <br>");
    }
    else if(trafficSignal==="green"){
        document.write("Move now <br>");
    }
}
else{
    document.write("You entered a wrong color of traffic signal. Please enter one of: red, yellow, green. <br>");
}
// Traffic Signal Program End

// Car fuel Program
let carFuel = +prompt("Enter remaining car fuel(in litres)");
if(carFuel<0.5){
    Swal.fire({
        title: "Are you sure?",
        text: `Please refill the fuel in your car. currently, ${carFuel} litre fuel in your car`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I'm Sure!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Done!",
            text: "you can go now with limited fuel in your car!",
            icon: "success"
          });
        }
      });
}
else{
    Swal.fire({
        title: `${carFuel} litre fuel available in your car`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      })
}

// Car fuel Program End

// Marks Sheet Grading Program
let totalMarks = +prompt("Enter total marks");
let obtainedMarks = +prompt("Enter obtained marks");
let percentage = (obtainedMarks / totalMarks) * 100;
let grade = ["A1", "A", "B", "C", "D", "Fail"];
let remarks = ["Outstanding","Excellent","Very Good","Good","Satisfactory","Needs Improvement"];

document.write("<h2><u>Marks Sheet</u></h2>");
document.write(`Total Marks: ${totalMarks} <br>`);
document.write(`Obtained Marks: ${obtainedMarks} <br>`);
document.write(`Percentage: ${percentage.toFixed(2)}% <br>`);

if (percentage >= 80) {
    document.write(`Grade: ${grade[0]} <br> Remarks: ${remarks[0]} <br>`);
} else if (percentage >= 70) {
    document.write(`Grade: ${grade[1]} <br> Remarks: ${remarks[1]} <br>`);
} else if (percentage >= 60) {
    document.write(`Grade: ${grade[2]} <br> Remarks: ${remarks[2]} <br>`);
} else if (percentage >= 50) {
    document.write(`Grade: ${grade[3]} <br> Remarks: ${remarks[3]} <br>`);
} else if (percentage >= 40) {
    document.write(`Grade: ${grade[4]} <br> Remarks: ${remarks[4]} <br>`);
} else {
    document.write(`Grade: ${grade[5]} <br> Remarks: ${remarks[5]} <br>`);
}
// Marks Sheet Grading Program End

// Guess game Program
let userNumber = +prompt("Guess a secret number");
let definedNumber = [1,2,3,4,5,6,7,8,9,10];

if(definedNumber.includes(userNumber)){
        alert("Bingo! Correct Answer");
}
else if(userNumber===11){
    alert("Close Enough to the correct answer");
}
else{
    alert("Sorry! try again");
}
// Guess Game Program Close

// Divisible by three program
let dividebyThree = +prompt("Enter a number to check is it divisible by 3 or not")

if(dividebyThree%3===0){
    alert(`Yes, the input ${dividebyThree} number is divisible by three`);
}
else{
    alert(`No, the input ${dividebyThree} number is not divisible by three`)
}
// Divisible by three program close

let temperatureOutside = +prompt("Enter temperature to check the weather condition");

if(temperatureOutside>40){
    alert(`The Temperature is ${temperatureOutside}°C, It's too hot outside`);
}
else if(temperatureOutside>30){
    alert(`The Temperature is ${temperatureOutside}°C, Today weather is normal`);
}
else if(temperatureOutside>20){
    alert(`The Temperature is ${temperatureOutside}°C, TOday's weather is cool`);
}
else if(temperatureOutside>10){
    alert(`The Temperature is ${temperatureOutside}°C, Today's weather is so cool`);
}
else{
    alert(`The Temperature is ${temperatureOutside}°C, Condition is not defined`);
}