export default function fetchAddToCart(data){

    const token = localStorage.getItem('token');

    console.log(data)
    
    return fetch("http://127.0.0.1:8000/cart/add/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Token ${token}`,
        },
        mode: 'cors',
        credentials: 'include',
        body: data
      })
     
}


