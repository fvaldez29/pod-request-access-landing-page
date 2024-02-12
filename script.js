document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the email input value
        const emailInput = document.querySelector('input[name="email"]');
        const emailValue = emailInput.value.trim();

        // Get the error message span element
        const errorMsg = document.querySelector('.errorMsg');

        // Basic email validation
        if (!isValidEmail(emailValue)) {
            // Show error message
            errorMsg.style.display = 'inline-block';
        } else {
            // Hide error message
            errorMsg.style.display = 'none';

            // If validation passes, you can submit the form or perform other actions
            // For demonstration purposes, I'll just log the email value
            console.log('Email submitted:', emailValue);
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        // Use a simple regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

    