import styles from "./BuyButton.module.css";

export default function BuyButton() {

    return (
        <div  onClick={() => console.log("click en Comprar")}>
            <button className={styles.buyButton}>Comprar</button>
        </div>
    )
}