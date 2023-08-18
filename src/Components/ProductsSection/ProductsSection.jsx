import styles from './ProductsSection.module.css';
import Card from '../Card/Card.jsx';
import Container from '../Container/Container';

export default function ProductsSection(){

    return (
        <section className={styles.products__group}>
            <Container>
                <div className={styles.products__menu}>
                    <h3 className={styles.products__title}>Star Wars</h3>
                    <a href="/screens/secciones.html?sectionId=star-wars">
                        <button className={styles.products__ver}><div>Ver todo</div><div className={styles.products__verFlecha}></div></button>
                    </a>                  
                </div>
                <div className={styles.products__items}>
                    <Card />
                </div>
            </Container>            
        </section>
    )
}