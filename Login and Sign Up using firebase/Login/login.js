import { auth, signInWithEmailAndPassword} from '../firebase.js';

// Access DOM elements
let formFields = document.querySelectorAll("form input");
const [loginEmail, loginPassword] = formFields;
console.log(loginEmail, loginPassword);

let loginBtn = document.getElementById("loginBtn");

// Define the loginUser function
const loginUser = (event) => {
    event.preventDefault(); // Prevent default form submission
    loginBtn.innerText = "Logging In...";
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
     .then((userCredential) => {
    // Signed in 
    loginBtn.innerText = "Login"
    const user = userCredential.user;
    Toastify({
        text: "You're Logged In",
        duration: 3000
    }).showToast();
    // ...
    setTimeout(() => {
        window.location.href = "../dashboard/dashboard.html";
    }, 2000);
     })
     .catch((error) => {
    loginBtn.innerText = "Login"
    const errorCode = error.code;
    const errorMessage = error.message;
    Toastify({
        text: `${errorMessage}`,
        duration: 3000
    }).showToast();
    });
}

// Now, attach the event listener
loginBtn.addEventListener("click", loginUser);

// Handle sign-up redirection
let gotosignup = document.getElementById("gotosignup");
const jumpToSignUp = (event) => {
    event.preventDefault();
    window.location.href = "../SignUp/signup.html";
};
gotosignup.addEventListener("click", jumpToSignUp);

console.log(auth);
