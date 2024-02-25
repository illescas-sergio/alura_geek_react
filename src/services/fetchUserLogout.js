

export default function fetchUserLogout(){

    const token = localStorage.getItem('token');
    
    return fetch("http://127.0.0.1:8000/auth/logout/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Token ${token}`,
        },
        credentials: "include",
    })
     
}