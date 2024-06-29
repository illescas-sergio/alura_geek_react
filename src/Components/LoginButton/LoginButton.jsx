import { Link } from 'react-router-dom';
import styles from './LoginButton.module.css';

export default function LoginButton(){

    return (
        <Link to={"/login"}>
            <button className={styles.header__botonLogin}>Iniciar Sesión</button>
        </Link>
    )
}
