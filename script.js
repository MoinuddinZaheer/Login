const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = loginForm.email.value.trim();
  const password = loginForm.password.value.trim();

  if (!email || !password) {
    errorMessage.style.display = 'block';
    return;
  }

  const userName = email.split('@')[0];
  window.location.href = `welcome.html?user=${userName}`;
});
