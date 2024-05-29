

export function updateProduct(productId, product_name, price, category, product_description){

    const token = localStorage.getItem('token');

    
    return fetch(`http://localhost:8000/products/${productId}/`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Token ${token}`,          
        },
        credentials: "include",
        body: JSON.stringify({
            product_name: product_name,
            price: price,
            category: category,
            product_description: product_description
        })
    }
    );    
}