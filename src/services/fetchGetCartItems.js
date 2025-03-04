export default function fetchGetCartItems(){

    const token = localStorage.getItem('token');
    
    return fetch("http://127.0.0.1:8000/cart/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Token ${token}`,
        },
        mode: 'cors',
        credentials: 'include',
      })
     
}

