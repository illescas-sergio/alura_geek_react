export function imageCollector(productsToBuy, products) {
    return productsToBuy
        .map(item => products.find(prod => prod.id === item.product))
        .filter(Boolean); // Filtra valores `undefined` si hay productos que no se encuentran
}

export function getImageUrl(itemId, images) {
    if (!Array.isArray(images)) return null; // Evita error si images es undefined
    const foundProduct = images.find(prod => prod.id === itemId);
    return foundProduct ? foundProduct.product_image : null;
}