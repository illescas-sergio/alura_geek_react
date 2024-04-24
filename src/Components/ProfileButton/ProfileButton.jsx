import { Link } from 'react-router-dom';
import styles from './ProfileButton.module.css';

// eslint-disable-next-line react/prop-types
export default function ProfileButton(){

    return (
        <Link to={"/profile"}>
            <button className={styles.profile__button}>Mi perfil</button>
        </Link>
    )
}