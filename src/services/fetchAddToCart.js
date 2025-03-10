export default function fetchAddToCart(data){

    const token = localStorage.getItem('token');
    
    return fetch("http://127.0.0.1:8000/cart/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Token ${token}`,
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          product_id: data.product_id,
          quantity: data.quantity
        })
      })
     
}


