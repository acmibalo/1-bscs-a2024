const form = document.getElementById('contactForm');
const toast = document.getElementById('successToast');

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

function showError(fieldId, show) {
  const error = document.getElementById(`${fieldId}Error`);
  error.style.display = show ? 'block' : 'none';
  const input = document.getElementById(fieldId);
  input.style.borderColor = show ? '#e53e3e' : '';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  let isValid = true;
  
  // Validate name
  if (!form.name.value.trim()) {
    showError('name', true);
    isValid = false;
  } else {
    showError('name', false);
  }

  // Validate email
  if (!validateEmail(form.email.value)) {
    showError('email', true);
    isValid = false;
  } else {
    showError('email', false);
  }

  // Validate subject
  if (!form.subject.value.trim()) {
    showError('subject', true);
    isValid = false;
  } else {
    showError('subject', false);
  }

  // Validate message
  if (!form.message.value.trim()) {
    showError('message', true);
    isValid = false;
  } else {
    showError('message', false);
  }

  if (!isValid) return;

  // Simulate form submission
  const submitButton = form.querySelector('.submit-button');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 3000);

    // Reset form
    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
  } catch (error) {
    console.error('Error sending message:', error);
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
  }
});

// Real-time validation
const inputs = form.querySelectorAll('.form-control');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.id === 'email') {
      showError(input.id, !validateEmail(input.value));
    } else {
      showError(input.id, !input.value.trim());
    }
  });
});