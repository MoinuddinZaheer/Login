const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userName = urlParams.get('user');

if (userName) {
  const welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.textContent = `Welcome, ${userName}!`;
} else {
  window.location.href = 'index.html'; 
}
