function Login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const storedData = localStorage.getItem('userdata');
        if (storedData) {
            const userData = JSON.parse(storedData);
            if (userData.username === username && userData.password === password) {
                alert('Login successful!');
                return location.href = '../../timemanager/home/home.html';
            } else {
                alert('Invalid username or password.');
            }
        } else {
            alert('No user data found. Please register first.');
        }
    } else {
    alert('Please enter both username and password.');
    }
}


