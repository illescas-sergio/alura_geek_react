import styles from './FooterLogo.module.css';

export default function FooterLogo(){

    return (
        <div className={styles.footer__logo}>
            <img src="../assets/Logo.png" alt="" className={styles.footer__logo__img} />
        </div>
    )
}

