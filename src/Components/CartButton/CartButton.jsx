import { Link } from 'react-router-dom';
import styles from './CartButton.module.css';

// eslint-disable-next-line react/prop-types
export default function CartButton(){

    return (
        <Link to={"/cart"}>
            <button className={styles.profile__button}>Mi carrito</button>
        </Link>
    )
}