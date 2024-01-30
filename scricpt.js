function validateForm(event) {
    event.preventDefault();
  
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');
  
    if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long';
      return;
    } else {
      passwordError.textContent = '';
    }
  
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match';
      return;
    } else {
      confirmPasswordError.textContent = '';
    }
  
    // Form is valid, you can submit the form or perform other actions here
    alert('Registration successful!');
  }
  