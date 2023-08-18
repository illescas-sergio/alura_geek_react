import styles from './LoginButton.module.css';

export default function LoginButton(){

    return (
        <a >
            <button className={styles.header__botonLogin}>Login</button>
        </a>
    )
}