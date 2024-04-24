/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react/prop-types */
import styles from './ProductsGallery.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../services/fetchProducts';
import { setProducts } from '../../store/slices/productsSlice';
import { useEffect } from 'react';
import Sections from '../Sections/Sections';


// eslint-disable-next-line no-unused-vars, react/prop-types
export default function ProductsGallery(){

    const {products} = useSelector((state) => state.products);

    const dispatch = useDispatch()

    useEffect(() => {
       
        if(products.length === 0){
            
            fetchProducts()
            .then(resp => resp.json())
            .then(data => {
                //Tengo que modificar desde acá si la data va a venir paginada!!
                // console.log(data)
                // const results = data.results; 
                // dispatch(setProducts(results))
                dispatch(setProducts(data))
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    const sectionNames = [];

    products.forEach(el=> {
        if(!sectionNames.includes(el.category)){
        sectionNames.push(el.category)
        }
    });

        
    return (
    
        <main className={styles.main} >

            {
                sectionNames.map(el => {
                    return <Sections key={el} sectionId={el} productos={products} />                 
                }) 
            }

        </main>
    
    )

}
