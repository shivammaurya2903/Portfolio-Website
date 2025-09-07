
  const toggleBtn = document.getElementById('toggle-mode');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode') ;
    toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
