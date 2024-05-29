/* eslint-disable react/prop-types */
import styles from './ShowSection.module.css';
import Container from '../Container/Container.jsx';
import Card from '../Card/Card.jsx';
import { Link } from 'react-router-dom';


// eslint-disable-next-line no-unused-vars
export default function ShowSection({sectionId, products}){ 

    return (
        
        <section className={styles.products__group}>
            <Container>
                <div className={styles.products__menu}>
                  <h3 className={styles.products__title}>{sectionId}</h3>
                  <div>
                      <Link to={"/home"}><button className={styles.products__ver}><div>Volver</div><div className={styles.products__verFlecha}></div></button></Link>
                  </div> 
                </div>
                <div className={styles.products__items}>
                {
                    products.map(el => {
                        if(el.category === sectionId)
                            return (
                                <Card key={el.id} name={el.product_name} imageUrl={el.product_image} price={el.price} sectionId={el.category} description={el.product_description} id={el.id}/>
                            )
                    })
                }
                
                </div>
            </Container>  
        </section>

    )
}