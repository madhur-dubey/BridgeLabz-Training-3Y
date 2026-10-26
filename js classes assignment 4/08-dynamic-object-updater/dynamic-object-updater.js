"use strict";

// Q8: The form updates this JavaScript object when submitted.
const user = { name: "John", email: "john@mail.com", age: 21 };

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const output = document.getElementById("output");

function showUser() {
    output.textContent = JSON.stringify(user, null, 2);
}

// Put the starting object values into the form.
nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;
showUser();

document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim();
    user.age = Number(ageInput.value);

    showUser();
});
