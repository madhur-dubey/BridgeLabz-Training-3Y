"use strict";

// Q7: Check username and password rules with regular expressions.
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const result = document.getElementById("result");

    const usernameValid = /^.{5,}$/.test(username);
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);

    usernameError.textContent = usernameValid ? "" : "Username must be at least 5 characters.";
    passwordError.textContent = passwordValid ? "" :
        "Password needs 8+ characters, uppercase, lowercase, number, and special character.";

    const valid = usernameValid && passwordValid;
    result.textContent = valid ? "Login details are valid!" : "Please correct the errors.";
    result.style.color = valid ? "green" : "crimson";
});
