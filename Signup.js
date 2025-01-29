document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const termsCheckbox = document.getElementById("terms-policy");
    const submitButton = document.querySelector(".button1");

    // Function to show error messages
    function showError(input, message) {
        let errorSpan = input.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("error-message")) {
            errorSpan = document.createElement("span");
            errorSpan.classList.add("error-message");
            input.parentElement.appendChild(errorSpan);
        }
        errorSpan.innerText = message;
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "12px";
    }

    // Function to clear error messages
    function clearError(input) {
        let errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains("error-message")) {
            errorSpan.innerText = "";
        }
    }

    // Function to validate email format
    function isValidEmail(emailValue) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    }

    // Main Validation Function
    function validateForm(event) {
        let isValid = true; // Assume form is valid, then check for errors

        // Validate First Name
        if (firstName.value.trim() === "") {
            showError(firstName, "First name is required");
            isValid = false;
        } else {
            clearError(firstName);
        }

        // Validate Last Name
        if (lastName.value.trim() === "") {
            showError(lastName, "Last name is required");
            isValid = false;
        } else {
            clearError(lastName);
        }

        // Validate Email
        if (email.value.trim() === "") {
            showError(email, "Email is required");
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, "Enter a valid email address");
            isValid = false;
        } else {
            clearError(email);
        }

        // Validate Date of Birth
        if (dob.value.trim() === "") {
            showError(dob, "Date of birth is required");
            isValid = false;
        } else {
            clearError(dob);
        }

        // Validate Password (min length: 6)
        if (password.value.length < 6) {
            showError(password, "Password must be at least 6 characters long");
            isValid = false;
        } else {
            clearError(password);
        }

        // Validate Confirm Password (must match Password)
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Passwords do not match");
            isValid = false;
        } else {
            clearError(confirmPassword);
        }

        // Validate Terms & Privacy Policy checkbox
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, "You must accept the Terms & Privacy Policy");
            isValid = false;
        } else {
            clearError(termsCheckbox);
        }

        // Prevent form submission if any field is invalid
        if (!isValid) {
            event.preventDefault();
        }
    }

    // Add event listener to the Submit button
    submitButton.addEventListener("click", validateForm);
});
