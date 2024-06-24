function button1(){
    window.location.href =  "login.html"
}
function loginForm(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let error = document.getElementById("error");
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (emailRegex.test(email.value) || passwordRegex.test(password.value)) {
        if (emailRegex.test(email.value)) {
            if (passwordRegex.test(password.value)) {
                    event.preventDefault();
                    window.location.href = 'welcome.html';
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

let isOpen = false;
function hiddenPassword() {
    let eye = document.getElementById('eye');
    isOpen = !isOpen
    if (isOpen) {
        eye.className = "fa-solid fa-eye-slash";
        password.type = 'password';
    }
    else {
        eye.className = "fa-solid fa-eye";
        password.type = 'text';
    }
}