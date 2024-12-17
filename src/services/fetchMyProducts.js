

export const fetchMyProducts = () => {

    console.log("fetcheando mis productos")

    const token = localStorage.getItem('token');
    
    return fetch("http://localhost:8000/products/user/my_products/", {
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'Content-Type',
            'Authorization' : `Token ${token}`,
            },
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        })
     
}