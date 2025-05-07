// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Select the <h1> element
    const heading = document.querySelector("h1");

    // Change the text when clicked
    heading.addEventListener("click", function () {
        heading.textContent = "You clicked me!";
        heading.style.color = "blue"; // Change color
    });

    // Log a message when the page loads
    console.log("Hello, World! Script loaded successfully.");
});