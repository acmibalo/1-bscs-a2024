function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Simple validation
    if (!email || !password) {
      errorMessage.style.display = 'block';
      return;
    }
    
    // Here you would typically make an API call to your backend
    // For demo purposes, we'll just simulate a login
    if (email === 'demo@example.com' && password === 'password') {
      window.location.href = '/dashboard';
    } else {
      errorMessage.style.display = 'block';
    }
  }