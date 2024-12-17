export function addProductToCart(product, units = 1){
    
    const selectedProduct = {
        quantity: units,
        product: product
    }

    return selectedProduct
}

