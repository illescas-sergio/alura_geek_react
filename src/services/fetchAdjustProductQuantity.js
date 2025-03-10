export default function fetchAdjustProductQuantity(id, quantity){

    const token = localStorage.getItem('token');
    //id === itemId (cart)
    //quantity = calculated quantity (total)
    return fetch(`http://127.0.0.1:8000/cart/items/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Token ${token}`,
        },
        body: JSON.stringify({
            quantity: quantity
        }),
        mode: 'cors',
        credentials: 'include',
      })
     
}