

export default function fetchUserLogin(email, password){
    
    return fetch("http://127.0.0.1:8000/auth/login/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
      })
     
}