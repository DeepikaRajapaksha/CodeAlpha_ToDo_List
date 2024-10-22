document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Logging in with Email: ${email}, Password: ${password}`);

    // In a real app, you'd send a POST request to the backend here
    // For now, let's simulate successful login and redirect to the index page
    window.location.href = 'index.html';
});
