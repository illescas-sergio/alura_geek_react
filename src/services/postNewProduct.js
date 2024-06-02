

export const postNewProducts = (product_name, price, category, product_description, image) => {

    const token = localStorage.getItem('token');

    // Crear un objeto FormData para enviar datos multipart/form-data
    const formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('product_description', product_description);
    formData.append('product_image', image); // Agregar la imagen al formulario


    return fetch("http://127.0.0.1:8000/products/", {
                method: 'POST',
                headers: {
                // 'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data',
                'Authorization' : `Token ${token}`,          
                },
                credentials: "include",
                body: formData
            });
}

