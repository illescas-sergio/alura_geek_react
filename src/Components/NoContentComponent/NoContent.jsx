import styles from "./NoContentComponent.module.css"
import Container from "../Container/Container.jsx"

export default function NoContentComponent(){

    return (

        <section className={styles.products__group}>
            <Container>
                <h3 className={styles.products__title}>No hay elementos para mostrar</h3>
                
            </Container>  
        </section>

    )
}
        
        
        