// tab switching on the projects page
const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // remove active from all buttons and panels
    tabBtns.forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });

    // add active to the clicked button and its target panel
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

// contact form validation
function submitForm() {
  var emailInput   = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var feedback     = document.getElementById('form-feedback');
  var emailRegex   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // clear previous errors
  emailInput.classList.remove('error');
  messageInput.classList.remove('error');
  feedback.className = 'form-feedback';
  feedback.textContent = '';

  var valid = true;

  if (!emailInput.value || !emailRegex.test(emailInput.value)) {
    emailInput.classList.add('error');
    valid = false;
  }

  if (!messageInput.value.trim()) {
    messageInput.classList.add('error');
    valid = false;
  }

  if (!valid) {
    feedback.textContent = 'Please fill in all fields correctly.';
    feedback.classList.add('error');
    return;
  }

  // simulate sending (no real backend)
  var btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  setTimeout(function() {
    feedback.textContent = "Message sent! I'll get back to you soon 🎉";
    feedback.classList.add('success');
    emailInput.value   = '';
    messageInput.value = '';
    btn.disabled = false;
    btn.textContent = 'Send Message';
  }, 1200);
}
