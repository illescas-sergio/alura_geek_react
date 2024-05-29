

export const deleteProduct = (id) => {

    const token = localStorage.getItem('token');

    return fetch(`http://127.0.0.1:8000/products/${id}/`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Token ${token}`,          
                },
                credentials: "include",
            });
}