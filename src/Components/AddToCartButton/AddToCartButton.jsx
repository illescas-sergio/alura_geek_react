import styles from "./AddToCartButton.module.css";

// eslint-disable-next-line react/prop-types
export default function AddToCartButton() {


    return (
        <div onClick={() => console.log("Hola")}>
            <button className={styles.buyButton}>Agregar al carrito</button>
        </div>
    )
}