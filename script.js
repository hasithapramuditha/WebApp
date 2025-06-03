// script.js

// Wait for the HTML content to be fully loaded before running script
document.addEventListener('DOMContentLoaded', function() {

    const ledButton = document.getElementById('ledButton');
    const tempValueSpan = document.getElementById('tempValue'); // For later
    const humidityValueSpan = document.getElementById('humidityValue'); // For later

    if (ledButton) {
        ledButton.addEventListener('click', function() {
            console.log('LED Button clicked!');

            // Challenge: Change button text
            if (ledButton.textContent === 'Toggle LED' || ledButton.textContent === 'Turn LED ON') {
                ledButton.textContent = 'Turn LED OFF'; // Example state change
                console.log('LED is now ON');
            } else {
                ledButton.textContent = 'Turn LED ON';
                console.log('LED is now OFF');
            }
        });
    } else {
        console.error('LED button not found!');
    }

    // We'll add Firebase logic here on Day 2!
    console.log('Script loaded. Waiting for button clicks...');
});