import Container from "../Container/Container";
import styles from "./SimilProds.module.css";


export default function SimilProds(){

    return (
        <section className={styles.detalle__productosSimilares}>
            <Container>
                <div className={styles.productos__similares__menu}>
                    <h3 className={styles.productos__similares__title}>Productos similares</h3>
                </div>
                <div className={styles.productos__similaresItems}>
                        
                        
                </div>

            </Container>
            
        </section>  
    )
}