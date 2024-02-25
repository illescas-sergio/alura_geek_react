/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react/prop-types */
// import { useState } from 'react';
import styles from './ProductsGallery.module.css';
// import Sections from '../Sections/Sections.jsx';

import { useDispatch, useSelector } from 'react-redux';
// import Card from '../Card/Card';
// import Container from '../Container/Container';
import { fetchProducts } from '../../services/fetchProducts';
import { setProducts } from '../../store/slices/productsSlice';
import { useEffect, useState } from 'react';
import Sections from '../Sections/Sections';





// eslint-disable-next-line no-unused-vars
export default function ProductsGallery(){

    const {products} = useSelector((state) => state.products);

    // eslint-disable-next-line no-unused-vars
    const [showSection, setShowSection] = useState("");

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("entro al useEffect")
        if(products.length === 0){
            console.log("hago el fetch")
            fetchProducts()
            .then(resp => resp.json())
            .then(data => {
                console.log(data)    
                dispatch(setProducts(data))
                console.log("Ya está")
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log("console numero 2")
        console.log("products del estado", products)
    }, [products])

    const sectionNames = [];

    products.forEach(el=> {
        if(!sectionNames.includes(el.category)){
        sectionNames.push(el.category)
        }
    })

    

    return (
    
        <main className={styles.main}>
            {/* <Container> */}
           
            {/* {
                products?.map(el => {
                    return <Card key={el.name}>Soy card</Card>
                })
            } */}
            {/* {
                products?.map(el => {

                   return <Card key={el.id} name={el.name} price={el.price} imageUrl={el.image}/> 
                })
            } */}
            {/* </Container> */}
            {
                sectionNames.map(el => {
                    console.log(sectionNames)
                    return <Sections key={el} sectionId={el} productos={products} setShowSection={setShowSection}/>                 
                    }) 
            }

        </main>
    
    )

//     // eslint-disable-next-line no-unused-vars
// const [showSection, setShowSection] = useState("");
// const data = useSelector((state) => state.data)
// console.log(data)
  
// let sections = []
// // eslint-disable-next-line no-unused-vars
// data.items.forEach(el=> {
//     if(!sections.includes(el.category)){
//         sections.push(el.category)
//     }
// })


//     return (
//         <main className={styles.products}>
            
//             {
//               sections.map(el => (
//                 <Sections key={el} sectionId={el} productos={data.items} setShowSection={setShowSection}/>
//                 )) 
//             }
          
//         </main>     
//     )
}
