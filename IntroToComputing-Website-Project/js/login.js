function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // for backend unta hehe
    console.log('Login attempt:', { email });
    
    // show a success message
    alert('Login functionality is currently in development. Please try again later.');
  }

  function socialLogin(provider) {
    console.log(`Attempting to login with ${provider}`);
    alert(`${provider} login integration coming soon!`);
  }

  // Add input validation and visual feedback
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.value.length > 0) {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });
  });