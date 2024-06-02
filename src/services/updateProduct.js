

// export function updateProduct(productId, product_name, price, category, product_description, image){

//     const token = localStorage.getItem('token');

//     console.log(image)

    
//     return fetch(`http://localhost:8000/products/${productId}/`, {
//         method: 'PUT',
//         headers: {
//         // 'Content-Type': 'application/json',
//         'Authorization' : `Token ${token}`,          
//         },
//         credentials: "include",
//         body: JSON.stringify({
//             product_name: product_name,
//             price: price,
//             category: category,
//             product_description: product_description,
//             product_image: image
//         })
//     }
//     );    
// }

export function updateProduct(productId, product_name, price, category, product_description, image) {
    const token = localStorage.getItem('token');

    // Crear un objeto FormData para enviar datos multipart/form-data
    const formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('product_description', product_description);
    formData.append('product_image', image); // Agregar la imagen al formulario

    return fetch(`http://localhost:8000/products/${productId}/`, {
        method: 'PUT',
        headers: {
            'Authorization': `Token ${token}`,
        },
        credentials: "include",
        body: formData, // Enviar el formulario multipart en lugar de JSON
    });
}


//Tengo que usar FormData para que funcione el envio de multilplies formatos de datos