import { Link } from 'react-router-dom';
import styles from './MyProductsButton.module.css';

export default function MyProductsButton(){

    return (
        <Link to={"/myProducts"}>
            <button className={styles.myProducts__button}>Mis productos</button>
        </Link>
    )
}