/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react/prop-types */
import styles from './ProductsGallery.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../services/fetchProducts';
import { setProducts } from '../../store/slices/productsSlice';
import { useEffect } from 'react';
import Sections from '../Sections/Sections';
import NoContentComponent from '../NoContentComponent/NoContent';


// eslint-disable-next-line no-unused-vars, react/prop-types
export default function ProductsGallery(){

    const {products} = useSelector((state) => state.products);

    const dispatch = useDispatch()

    useEffect(() => {
        
        fetchProducts()
        .then(resp => {
            return resp.json()
        })
        .then(data => {
        //Tengo que modificar desde acá si la data va a venir paginada!!
            return dispatch(setProducts(data))
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sectionNames = [];

    if(products.length !== 0){
        products.forEach(el=> {
            if(!sectionNames.includes(el.category)){
            sectionNames.push(el.category)
            }
        });
    } 
    
           
    return (
        
        <main className={styles.main} >
            {
                sectionNames.length > 0 ? sectionNames.map(el => {
                    return <Sections key={el} sectionId={el} productos={products} />                 
                }) : <NoContentComponent />
            }
        </main>
    )

}
