(function () {
  const button = document.querySelector('.theme-toggle');
  const label = document.querySelector('.theme-label');
  if (!button || !label) return;

  function syncLabel() {
    const dark = document.documentElement.dataset.theme === 'dark';
    label.textContent = dark ? 'Light' : 'Dark';
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
    button.setAttribute('title', `Switch to ${dark ? 'light' : 'dark'} theme`);
  }

  button.addEventListener('click', function () {
    const dark = document.documentElement.dataset.theme === 'dark';
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    syncLabel();
  });

  syncLabel();
})();
