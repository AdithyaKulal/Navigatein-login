// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission (page reload)
  
    // Get email and password values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Log the data (replace this with actual logic later)
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Example: Add a basic validation check
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }
  
    alert('Login successful! (Replace with actual authentication)');
  });
  