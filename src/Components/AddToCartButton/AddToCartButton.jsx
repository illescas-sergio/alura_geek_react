import styles from "./AddToCartButton.module.css";

export default function AddToCartButton() {

    return (
        <div onClick={() => console.log("click en agregar al carrito y tengo que agregar el producto al estado")}>
            <button className={styles.buyButton}>Agregar al carrito</button>
        </div>
    )
}