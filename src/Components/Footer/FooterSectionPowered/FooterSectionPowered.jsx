import styles from './FooterSectionPowered.module.css';

export default function FooterSectionPowered(){

    return (
        <section className={styles.footer__poweredBy}>
            <div className={styles.poweredBy__author}>
                <p className={styles.poweredBy__authorText}>Desarrollado por Sergio Illescas</p> 
                <p>2022</p>
            </div>
        </section>
    )
}