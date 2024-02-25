/* eslint-disable react/prop-types */
import styles from './ShowSection.module.css';
import Container from '../Container/Container.jsx';
import Card from '../Card/Card.jsx';


// eslint-disable-next-line no-unused-vars
export default function ShowSection({data, sectionId, section}){ // Entiendo que esto es "ver todos"


    const getBack = () => {
        
    }

    return (
        
        <section className={styles.products__group}>
            <Container>
                <div className={styles.products__menu}>
                  <h3 className={styles.products__title}>{sectionId}</h3>
                  <div onClick={getBack}>
                      <button className={styles.products__ver}><div>Volver</div><div className={styles.products__verFlecha}></div></button>
                  </div> 
                </div>
                <div className={styles.products__items}>
                {
                    data.map(el => {
                        if(el.category === section)
                            return (
                                <Card key={el.id} name={el.name} imageUrl={el.image} price={el.price} sectionId={el.category} description={el.description} id={el.id}/>
                            )
                    })
                }
                
                </div>
            </Container>  
        </section>
        
    )
}