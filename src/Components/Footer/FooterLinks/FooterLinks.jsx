import styles from './FooterLinks.module.css';

export default function FooterLinks(){

    return (
        <div className={styles.footer__links}>
            <a className={styles.footer__linksItem} href="">Quienes somos</a>
            <a className={styles.footer__linksItem} href="">Política de privacidad</a>
            <a className={styles.footer__linksItem} href="">Programa de fidelidad</a>
            <a className={styles.footer__linksItem} href="">Nuestras tiendas</a>
            <a className={styles.footer__linksItem} href="">Quiero ser franquiciado</a>
            <a className={styles.footer__linksItem} href="">Anuncie aquí</a>
        </div>
    )
}