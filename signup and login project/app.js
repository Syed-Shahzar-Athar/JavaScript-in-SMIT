let name = document.getElementById("userName");
let email = document.getElementById("userEmail");
let password = document.getElementById("userPassword");
let userBtn = document.getElementById("userBtn");
let userloginEmail = document.getElementById("userloginEmail");
let userloginPassword = document.getElementById("userloginPassword");

const signupButton = () => {
    window.location.href = "signup.html"
}

const loginButton = () => {
    window.location.href = "login.html"
}

const dashboardloginButton = () => {
    window.location.href = "dashboard.html"
}

// isme mene userobject bana kar pehle local storage main save kiya hai or then is pr validations lagai hen
const signupForm = () => {
    let userObject = {
        name : name.value,
        email : email.value,
        password : password.value,
    }
    localStorage.setItem("userInfo", JSON.stringify(userObject))

    let error = document.getElementById("error");
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (emailRegex.test(email.value) || passwordRegex.test(password.value)) {
        if (emailRegex.test(email.value)) {
            if (passwordRegex.test(password.value)) {
                    event.preventDefault();
                    window.location.href = 'login.html';
            }
            else {
                event.preventDefault();
                error.innerText = 'Incorrect Password';
            }
        }
        else {
            event.preventDefault();
            error.innerText = 'Incorrect Email';
        }
    }
    else {
        event.preventDefault();
        error.innerText = 'Incorrect Credentials';
    }
}

const loginform = () => {
    let data = JSON.parse(localStorage.getItem("userInfo"))

    if(data.email===userloginEmail.value && data.password===userloginPassword.value){
        window.location.href = "dashboard.html"
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Something went wrong!",
            text: "You don't have an account, or your email and password don't match.",
        });
    }
}

const dashboardAccount = () => {
    let data = JSON.parse(localStorage.getItem("userInfo"));
    let userBtn = document.getElementById("userBtn");
    let userBtnBottom = document.getElementById("userBtnBottom")

    if (data && data.name) {
        userBtn.innerHTML = `<i class="fa-solid fa-user"></i> ${data.name}`;
        userBtnBottom.innerHTML = `<i class="fa-solid fa-user"></i> ${data.name}`;
    }
}
dashboardAccount();
