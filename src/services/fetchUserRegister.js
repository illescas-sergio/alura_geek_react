
export const fetchUserRegister = (email, username, password) => {
    return fetch("http://127.0.0.1:8000/auth/register/", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'              
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                })
            });
}
