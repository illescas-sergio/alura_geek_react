export function fetchProductCategories(category){
    
    return fetch(`http://localhost:8000/products/category/${category}/`)// api DRF
    // fetch("http://localhost:3000/producto/")// para usar json-server
     
}