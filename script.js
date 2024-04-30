// Dummy database for storing user information
let users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

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

// Function to reset localStorage on login page load
function resetLocalStorage() {
  localStorage.removeItem('username');
}

// Add event listener for login page load to reset localStorage
window.addEventListener('load', resetLocalStorage);

// Function to handle logout
function logOut() {
  // Clear username from localStorage
  localStorage.removeItem('username');
  // Redirect user to login page
  window.location.href = 'index.html';
}

// Add event listener for logout button
document.getElementById('logout-btn')?.addEventListener('click', logOut);

// Retrieve username from localStorage and display it
const username = localStorage.getItem('username');
if (username) {
  document.getElementById('username')?.textContent = username;
}
