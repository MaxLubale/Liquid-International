// Get references to the form and submit button
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitButton");
const messageDiv = document.getElementById("message");

// Add an event listener to the form
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Display the success message
    messageDiv.textContent = "Form submitted successfully";
});

// Clear the success message after a few seconds
submitButton.addEventListener("click", function () {
    setTimeout(function () {
        messageDiv.textContent = "";
    }, 3000); // The message will disappear after 3 seconds 
});
