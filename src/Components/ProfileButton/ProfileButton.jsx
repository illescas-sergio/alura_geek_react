import { Link } from 'react-router-dom';
import styles from './ProfileButton.module.css';

// eslint-disable-next-line react/prop-types
export default function ProfileButton(){

    return (
        <Link to={"/profile"}>
            <button className={styles.header__botonProfile}>Mi perfil</button>
        </Link>
    )
}