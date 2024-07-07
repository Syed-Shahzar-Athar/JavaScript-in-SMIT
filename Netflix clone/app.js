let indexEmail = document.getElementById("indexEmail");
let error = document.getElementById("error");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let registererrorEmail = document.getElementById("registererrorEmail");
let registererrorPassword = document.getElementById("registererrorPassword");
let userloginEmail = document.getElementById("userloginEmail");
let userloginPassword = document.getElementById("userloginPassword");


// script for Index Page
const landingpageEmail = () => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let indexEmail = document.getElementById("indexEmail");
    let error = document.getElementById("error");
    if(emailRegex.test(indexEmail.value)){
        event.preventDefault();
        window.location.href = 'signup.html';
    }
    else if(indexEmail.value===""){
        event.preventDefault();
        error.innerText = "Enter Email"
    }
    else{
        event.preventDefault();
        error.innerText = "Incorrect Email"
    }
}
// script for Index Page Ended


// script for Signup Page 
const jumptoRegistrationForm = () => {
    window.location.href = "register.html"
}
// script for Signup Page Ended

// script for register page
const signupForm = () => {
    let userObject = {
        email : userEmail.value,
        password : userPassword.value,
    }
    localStorage.setItem("userInfo", JSON.stringify(userObject))
    if (emailRegex.test(userEmail.value) || passwordRegex.test(userPassword.value)) {
        if (emailRegex.test(userEmail.value)) {
            if (passwordRegex.test(userPassword.value)) {
                    event.preventDefault();
                    window.location.href = 'dashboard.html';
            }
            else {
                event.preventDefault();
                registererrorPassword.innerText = 'Incorrect Password';
            }
        }
        else {
            event.preventDefault();
            registererrorEmail.innerText = 'Incorrect Email';
        }
    }
    else {
        event.preventDefault();
        registererrorEmail.innerText = 'Incorrect Email';
        registererrorPassword.innerText = 'Incorrect Password';
    }
}
// script for register page ended

// script for signin page 
const loginform = (event) => {
    event.preventDefault(); // Prevent form submission

    let data = JSON.parse(localStorage.getItem("userInfo"));

    if (data && data.email === userloginEmail.value && data.password === userloginPassword.value) {
        window.location.href = "dashboard.html";
    } else {
        Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: "You don't have an account, or your email and password don't match.",
        });
    }
};

// script for signin page ended

// script for account signout on index page 
const signOut = () => {
    // localStorage.removeItem("userInfo");
    window.location.href = "./index.html"
    event.preventDefault();

}
// script for account signout on index page ended

// script for account signin on index page
const signIn = () => {
    event.preventDefault();
    window.location.href = "signin.html"
}


// toggle show/hide FAQs script
function toggleFAQ(element) {
    // Find the faq-answer element within the clicked .all-faq div
    var answer = element.querySelector('.faq-answer');

    // Toggle the visibility of the answer by toggling a CSS class
    if (answer.style.display === 'block' || answer.style.display === '') {
        answer.style.display = 'none';
        element.querySelector('i').classList.remove('fa-minus');
        element.querySelector('i').classList.add('fa-plus');
    } else {
        answer.style.display = 'block';
        element.querySelector('i').classList.remove('fa-plus');
        element.querySelector('i').classList.add('fa-minus');
    }
}
