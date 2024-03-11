/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react/prop-types */
import styles from './ProductsGallery.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../services/fetchProducts';
import { setProducts } from '../../store/slices/productsSlice';
import { useEffect } from 'react';
import Sections from '../Sections/Sections';
import { fetchProductCategories } from '../../services/fetchProductCategories';
import ShowSection from '../ShowSection/ShowSection';


// eslint-disable-next-line no-unused-vars, react/prop-types
export default function ProductsGallery(){

    const {products} = useSelector((state) => state.products);

    // eslint-disable-next-line no-unused-vars
    const [detail, setDetail] = useState(false)

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
    }, [products, detail]);

    const sectionNames = [];

    products.forEach(el=> {
        if(!sectionNames.includes(el.category)){
        sectionNames.push(el.category)
        }
    });

    const handleDetail = (string) => {
        console.log("click en boton", string)
        setDetail(true)
        fetchProductCategories(string)
            .then(resp => resp.json())
            .then(data => {
                dispatch(setProducts(data))
            });
    }

    function handleBack(){
        setDetail(false)
        fetchProducts()
            .then(resp => resp.json())
            .then(data => {
                dispatch(setProducts(data))
            });
    }

    
    return (
    
        <main className={styles.main} >
            {
                !detail ? sectionNames.map(el => {
                    return <Sections key={el} sectionId={el} productos={products} handleDetail={handleDetail}/>                 
                }) 
                    
                : 
                    
                (
                    sectionNames.map(el => {
                        return <ShowSection key={el} sectionId={el} productos={products} handleDetail={handleBack} />   
                    })
                )
            }

        </main>
    
    )

}
