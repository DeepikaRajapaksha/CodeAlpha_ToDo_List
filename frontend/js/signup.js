document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Signing up with Username: ${username}, Email: ${email}, Password: ${password}`);

    // In a real app, you'd send a POST request to the backend here
    // For now, let's simulate successful signup and redirect to the index page
    window.location.href = 'index.html';
});
