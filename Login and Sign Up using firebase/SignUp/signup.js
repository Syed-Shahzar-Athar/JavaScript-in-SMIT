import { auth, createUserWithEmailAndPassword } from '../firebase.js';

let formFields = document.querySelectorAll("form input");
const [userEmail, userPassword] = formFields;
console.log(userEmail, userPassword);

let gotologin = document.getElementById("gotologin");
let signUpBtn = document.getElementById("btnPrimary");

const signUp = (event) => {
    event.preventDefault();
    signUpBtn.innerText = "Signing Up...";
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => {
            // Signed up 
            signUpBtn.innerText = "Sign Up";
            const user = userCredential.user;
            Toastify({
                text: "You're Signed Up",
                duration: 3000
            }).showToast();
            
            // Redirect to login page after 3 seconds
            setTimeout(() => {
                window.location.href = "../Login/login.html";
            }, 2000);
        })
        .catch((error) => {
            signUpBtn.innerText = "Sign Up";
            const errorMessage = error.message;
            Toastify({
                text: `${errorMessage}`,
                duration: 3000
            }).showToast();
        });
};

const jumptoLogin = (event) => {
    event.preventDefault();
    window.location.href = "../Login/login.html";
};

signUpBtn.addEventListener("click", signUp);
gotologin.addEventListener("click", jumptoLogin);
