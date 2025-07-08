function Register() {
    const username= document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (username === "" || password === "" || email === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return false;
    }
    else{
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        else {
            const data = {
                username: username,
                password: password,
                email: email
            }
            localStorage.setItem("userdata", JSON.stringify(data));
            alert("Registration successful!");
            return location.href='../../timemanager/login/login.html';
        }
    }
    
}