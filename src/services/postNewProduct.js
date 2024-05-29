

export const postNewProducts = (product_name, price, category, product_description) => {

    const token = localStorage.getItem('token');

    return fetch("http://127.0.0.1:8000/products/", {
                method: 'POST',
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
            });
}