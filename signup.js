// Function to handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get input values from the form
  var name = document.getElementById('name').value;
  var currentClass = document.getElementById('current-class').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  // Validate inputs (ensure all fields are filled and passwords match)
  if (!name || !currentClass || !username || !password || !confirmPassword) {
    alert('Please fill in all fields.');
    return; // Exit function if any field is empty
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return; // Exit function if passwords don't match
  }

  // Check if the username already exists in localStorage
  if (localStorage.getItem(username)) {
    alert('Username already exists. Please choose a different one.');
    return; // Exit function if username is already taken
  }

  // Create an object to store user data
  var userData = {
    name: name,
    currentClass: currentClass,
    password: password
  };

  // Store user data in localStorage with the username as the key
  localStorage.setItem(username, JSON.stringify(userData));

  alert('Signup successful! You can now login.'); // Display success message
  window.location.href = 'login.html'; // Redirect to the login page
});
