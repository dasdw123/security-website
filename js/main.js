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
        window.location.href = "./";
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
    window.location.href = "./";
}

function fLogout() {
    localStorage.removeItem('currentUser');
    alert("You have been logged out.");
    window.location.href = "./";
}

// function checkLoginStatus(event) {
//     event.preventDefault();
//     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (currentUser) {
//         document.querySelector('.nav-item.dropdown').classList.remove('d-block');
//         document.querySelector('nav-item button').classList.add('d-none');
//         document.querySelector('.nav-item.dropdown a').addEventListener('click', fLogout);
//     } else {
//         document.querySelector('.nav-item.dropdown').classList.add('d-none');
//         document.querySelector('nav-item button').classList.add('d-none');
//     }
// }