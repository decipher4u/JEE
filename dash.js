// Function to get current time in HH:MM format
function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  return hours + ':' + minutes;
}

// Function to display user information on the dashboard
function displayUserInfo() {
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('current-class').textContent = currentUser.currentClass;
    document.getElementById('current-time').textContent = getCurrentTime();
  } else {
    // Redirect to login page if user data is not found
    window.location.href = 'login.html';
  }
}

// Function to handle logout
function logOut() {
  localStorage.removeItem('currentUser'); // Remove current user data from localStorage
  window.location.href = 'login.html'; // Redirect to the login page
}

// Call displayUserInfo function when the page loads
document.addEventListener('DOMContentLoaded', displayUserInfo);
