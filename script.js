// Dummy database for storing user information
let users = [];

// Function to handle sign-up form submission
function signUp(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  // Check if username already exists
  if (users.some(user => user.username === username)) {
    alert('Username already exists!');
    return;
  }
  // Add user to database
  users.push({ username, password });
  alert('Sign up successful! Please log in.');
}

// Function to handle login form submission
function logIn(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  // Check if user exists and password is correct
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    alert('Login successful!');
    // Save username to localStorage for use in the dashboard
    localStorage.setItem('username', username);
    // Redirect user to dashboard page
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password.');
  }
}

// Event listeners for form submissions
document.getElementById('signup-form').addEventListener('submit', signUp);
document.getElementById('login-form').addEventListener('submit', logIn);
