"use strict";

// Q5: Validate and display a movie ticket booking.
const bookingForm = document.getElementById("bookingForm");
const ticketArea = document.getElementById("ticket");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const nameValid = /^[A-Za-z ]+$/.test(name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    document.getElementById("nameError").textContent = nameValid ? "" : "Use letters and spaces only.";
    document.getElementById("emailError").textContent = emailValid ? "" : "Enter a valid email.";
    document.getElementById("seatsError").textContent = seatsValid ? "" : "Choose between 1 and 10 seats.";

    if (!nameValid || !emailValid || !seatsValid) {
        ticketArea.textContent = "Please fix the errors before booking.";
        return;
    }

    const booking = { name: name, email: email, seats: seats };
    ticketArea.innerHTML = `<h2>Booking Confirmed</h2>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>`;
});
