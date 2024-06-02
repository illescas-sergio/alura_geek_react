import Categories from "../../pages/Categories/Categories";
import Container from "../Container/Container";
import styles from "./SimilProds.module.css";


// eslint-disable-next-line react/prop-types
export default function SimilProds({category}){


    return (
        <section className={styles.detalle__productosSimilares}>
            <Container>
                <div className={styles.productos__similares__menu}>
                    <h3 className={styles.productos__similares__title}>Productos similares</h3>
                </div>
                <div className={styles.productos__similaresItems}>                        
                </div>
            </Container>
            <Categories product_category={category}/>
        </section> 
        

    )
}