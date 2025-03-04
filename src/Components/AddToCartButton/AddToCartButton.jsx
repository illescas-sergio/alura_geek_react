import styles from "./AddToCartButton.module.css";

// eslint-disable-next-line react/prop-types
export default function AddToCartButton({productData, handleAddProductToCart}) {


    return (
        <div onClick={() => handleAddProductToCart(productData)}>
            <button className={styles.buyButton}>Agregar al carrito</button>
        </div>
    )
}