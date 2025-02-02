// Example JavaScript for form validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('signup-confirm-password').value;
    
    if (password !== confirmPassword) {
      event.preventDefault();
      alert('Passwords do not match!');
    }
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    
    if (username === '' || password === '') {
      event.preventDefault();
      alert('Please fill in all fields.');
    }
  });
  