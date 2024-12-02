import { addProductToCart } from "../../helpers/cartProductLoader";
import styles from "./AddToCartButton.module.css";

// eslint-disable-next-line react/prop-types
export default function AddToCartButton({name, price}) {

    return (
        <div onClick={() => addProductToCart(name, price)}>
            <button className={styles.buyButton}>Agregar al carrito</button>
        </div>
    )
}