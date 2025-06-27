function fLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        localStorage.setItem('currentUser', JSON.stringify(user));
        path_link = window.location.pathname;
        parent_path = path_link.substring(0, path_link.lastIndexOf('/'));
        if (parent_path.split('/').pop() === "Final-project") {
            window.location.href = "./index.html";
        } else {
            window.location.href = "../index.html";
        }
    } else {
        alert("Invalid email or password.");
    }
}

function fSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("Email already exists. Please use a different email.");
        return;
    }
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Signup successful! You can now log in.");
    path_link = window.location.pathname;
    parent_path = path_link.substring(0, path_link.lastIndexOf('/'));
    if (parent_path.split('/').pop() === "Final-project") {
        window.location.href = "./index.html";
    } else {
        window.location.href = "../index.html";
    }
}

function fLogout() {
    localStorage.removeItem('currentUser');
    path_link = window.location.pathname;
    parent_path = path_link.substring(0, path_link.lastIndexOf('/'));
    if (parent_path.split('/').pop() === "Final-project") {
        window.location.href = "./index.html";
    } else {
        window.location.href = "../index.html";
    }
    alert("You have been logged out.");
    
}

function checkLoginStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const loginBtn = document.getElementById('login-container');
    const signupBtn = document.getElementById('signup-container');
    const dropdownMenu = document.querySelector('.nav-item.dropdown');

    if (currentUser) {
        loginBtn.classList.add('d-none');
        signupBtn.classList.add('d-none');
        dropdownMenu.classList.remove('d-none');
    } else {

        loginBtn.classList.remove('d-none');
        signupBtn.classList.remove('d-none');
        dropdownMenu.classList.add('d-none');
    }
}

document.addEventListener("DOMContentLoaded", checkLoginStatus);
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
loginForm.addEventListener('submit', fLogin);
signupForm.addEventListener('submit', fSignup);
document.querySelector('.custom-dropdown').addEventListener('click', fLogout);