
function registerUser() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;

    if (user === "" || pass === "") {
        alert("Fill all fields!");
        return;
    }

    localStorage.setItem("username", user);
     localStorage.setItem("password", pass);

    alert("Registered Successfully!");
    window.location.href = "login.html";
}


function loginUser() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        localStorage.setItem("loggedIn", "true");
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Username or Password!");
    }
}


function logoutUser() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}


function loadUser() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }

    let username = localStorage.getItem("username");
    document.getElementById("userDisplay").innerText = username;
}