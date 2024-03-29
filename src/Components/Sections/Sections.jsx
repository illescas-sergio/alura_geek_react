/* eslint-disable react/prop-types */
import styles from './Sections.module.css';
import Container from '../Container/Container.jsx';
import Card from '../Card/Card.jsx';


// eslint-disable-next-line react/prop-types
export default function Sections({sectionId, productos, handleDetail}){

    return (
        <section className={styles.products__group}>
            <Container>
                <div className={styles.products__menu}>
                  <h3 className={styles.products__title}>{sectionId}</h3>
                  <div onClick={() => handleDetail(sectionId)}>
                      <button className={styles.products__ver} ><div>Ver todo</div><div className={styles.products__verFlecha}></div></button>
                  </div>                  
                </div>
                <div className={styles.products__items}>
                {
                    productos.map(el => {
                        if(el.category === sectionId){
                            return (
                                <Card key={el.id} name={el.product_name} imageUrl={el.image} price={el.price} sectionId={el.category} description={el.description} id={el.id}/>
                            )
                        }
                    })
                }
                </div>
            </Container>  
        </section>
    )
}

