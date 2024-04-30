// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get username and password from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Retrieve user data from localStorage (assuming user data is stored in localStorage)
  var userData = JSON.parse(localStorage.getItem(username));

  // Check if user exists and password matches
  if (userData && userData.password === password) {
    alert('Login successful!'); // Display success message
    localStorage.setItem('currentUser', JSON.stringify(userData)); // Store current user data in localStorage
    window.location.href = 'dashboard.html'; // Redirect to the dashboard page
  } else {
    alert('Invalid username or password.'); // Display error message
  }
});
