import Container from "../Container/Container";
import styles from "./SimilProds.module.css";
import Card from "../Card/Card.jsx"


export default function SimilProds(){

    return (
        <section className={styles.detalle__productosSimilares}>
            <Container>
                <div className={styles.productos__similares__menu}>
                    <h3 className={styles.productos__similares__title}>Productos similares</h3>
                </div>
                <div className={styles.productos__similaresItems}>
                acá van las cards de cada producto de similares... 
                    Yo usaría la galería pero con el css de similares html
                    <Card />
                        
                </div>

            </Container>
            
        </section> 
        

    )
}