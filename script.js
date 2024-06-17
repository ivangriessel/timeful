const age = document.getElementById("age");
const message = document.getElementById("message");
const birthDate = new Date('1988-03-10T08:28:00'); // Create a constant for the birth date


// Function to calculate age with three decimal points of precision
function calculateAge(birthDate) {
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - birthDate;
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years

    const ageInYears = diffInMilliseconds / millisecondsPerYear;
    return ageInYears.toFixed(9);
}

function updateAge() {
    const currentAge = calculateAge(birthDate);
    age.textContent = currentAge;
}
// Set age on pageload
updateAge();
 
// Update the counter every second
const intervalId = setInterval(updateAge, 100);

message.textContent = '"Lost time is never found again." - Benjamin Franklin.'