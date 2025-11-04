/* Add your JavaScript to this file */

/* NewsLetter form  */



// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', function () {
    // Selecting the form, email input, and message area
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('#email');
    const messageDIV = document.querySelector('.message');

    console.log(form, emailInput, messageDIV); // Should all show elements


    // Safety check (in case elements aren't found)
    if (!form || !emailInput || !messageDIV) return;

    // Listening for the form submission
    form.addEventListener('submit', function (event) {
        // Stoping the page from refreshing
        event.preventDefault();

        // Trimming whitespace from input value
        const email = emailInput.value.trim();

        // Validate email 
        if (email) {
            // output Success message
            messageDIV.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            // Optionally clear input after success
            emailInput.value = '';
        } else {
            // Error message for empty input
            messageDIV.textContent = 'Please enter a valid email address.';
        }
    });
});
