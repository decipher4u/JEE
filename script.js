// Login function
function login(event) {
  event.preventDefault();
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;
  var storedUser = localStorage.getItem(username);
  if (storedUser && JSON.parse(storedUser).password === password) {
    alert('Login successful!');
    // Redirect or perform other actions
  } else {
    alert('Invalid username or password.');
  }
}

// Sign-up function
function signUp(event) {
  event.preventDefault();
  var username = document.getElementById('signup-username').value;
  var password = document.getElementById('signup-password').value;
  var existingUser = localStorage.getItem(username);
  if (existingUser) {
    alert('Username already exists.');
  } else {
    localStorage.setItem(username, JSON.stringify({ username: username, password: password }));
    alert('User registered successfully!');
  }
}

// Event listeners for login and sign-up forms
document.getElementById('login-form').addEventListener('submit', login);
document.getElementById('signup-form').addEventListener('submit', signUp);
