import Container from '../../../Container/Container';
import ButtonVer from '../ButtonVer/ButtonVer';
import styles from './BannerText.module.css';

export default function BannerText(){

    return (
        <Container>
            <div className={styles.banner__text}>
                <h1 className={styles.banner__title}>Febrero Promocional</h1>
                <p className={styles.banner__subtitle}>Productos seleccionados con 33% de descuento</p>
                <ButtonVer />
            </div>
        </Container>
        
    )
}