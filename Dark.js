const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference on load and apply it
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme + '-mode');
    themeToggle.checked = savedTheme === 'dark';
};

// Toggle theme on checkbox change
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light');
    }
});
