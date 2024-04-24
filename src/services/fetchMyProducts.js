

export const fetchMyProducts = () => {

    console.log("fetcheando mis productos")

    const token = localStorage.getItem('token');
    
    return fetch("http://localhost:8000/products/user/my_products/", {
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'Content-Type',
            'Authorization' : `Token ${token}`,
            },
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, *same-origin, omit
        })
     
}