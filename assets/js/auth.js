const loginForm = `<div class="authContainer">
            <div class="authHead">LOG IN</div>
            <input type="text" class="email" placeholder="Email">
            <input type="text" class="password" placeholder="Password">
            <div class="loginContainer">
                <button class="loginButton" onclick="login()">LOG IN</button>
                <a href="#" class="authLink" onclick="startSignup()">New User? Sign Up instead</a>
            </div>
        </div>`
const signupForm = `<div class="authContainer signup">
            <div class="authHead">SIGN UP</div>
            <input type="text" class="name" placeholder="Name">
            <input type="text" class="email" placeholder="Email">
            <input type="text" class="password" placeholder="Password">
            <div class="loginContainer">
                <button class="loginButton" onclick="register()">SIGN UP</button>
                <a href="#" class="authLink" onclick="startLogin()">Have an Account? Log in instead</a>
            </div>
        </div>`
const home = document.querySelector(".home");

function register() {
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    let name = document.querySelector(".name").value;

    localStorage.setItem(email, JSON.stringify({ email, name, password }));
    alert("Successfully registered. Please sign to use the website.");
}

async function login() {
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;

    let user = await JSON.parse(localStorage.getItem(email));
    if (user !== null && user.password === password) {
        home.removeChild(home.lastElementChild);
        home.innerHTML += `<div class="greetings">Hi ${user.name}!</div>`;
    }
    else {
        alert("Incorrect credentials or User does not exist");
    }
}

const startLogin = () => {
    home.removeChild(home.lastElementChild);
    home.innerHTML += loginForm;
}
const startSignup = () => {
    home.removeChild(home.lastElementChild);
    home.innerHTML += signupForm;
}