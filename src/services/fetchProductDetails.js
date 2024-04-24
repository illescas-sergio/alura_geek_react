

export function fetchProductDetails(productId){
    
    return fetch(`http://localhost:8000/products/${productId}`);    
}