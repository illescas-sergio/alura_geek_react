import { Link } from "react-router-dom";
import styles from "./AddProductButton.module.css";

export default function AddProductButton() {

    return (
        <div className={styles.divButton} onClick={() => console.log("click en Agregar producto")}>
            <Link to={"/addProducts"}><button className={styles.addProductButton}>Agregar producto</button></Link>
        </div>
    )
}