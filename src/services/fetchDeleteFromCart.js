export default function fetchDeleteFromCart(id){

    const token = localStorage.getItem('token');
    
    return fetch(`http://127.0.0.1:8000/cart/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Token ${token}`,
        },
        mode: 'cors',
        credentials: 'include',
      })
     
}

