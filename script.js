document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        const formData = {
            username,
            password,
            rememberMe: rememberMe
        };
        console.log('Форма отправлена:', formData);
        alert(JSON.stringify(formData, null, 2));

    });
});
