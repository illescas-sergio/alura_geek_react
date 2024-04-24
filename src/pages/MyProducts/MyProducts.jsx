import styles from "./MyProducts.module.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyProducts } from '../../services/fetchMyProducts.js';
import { setUsersProducts } from '../../store/slices/productsSlice.js';
import Categories from "../Categories/Categories.jsx";


// eslint-disable-next-line react/prop-types
export default function MyProducts(){

    const {usersProducts} = useSelector((state) => state.products)
    
    const dispatch = useDispatch() 


    useEffect(() => {
        console.log("Soy effect de usersProducts")
    }, [usersProducts])

    useEffect(() => {

        fetchMyProducts()
        .then(resp => {
            console.log(resp)

            return  resp.json()
        } )
        .then(data => {
            console.log(data)
            dispatch(setUsersProducts(data));
        })
        .catch(err => console.log(err));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(usersProducts)

    return (
        <main className={styles.productos}>
            <Categories product_category={"Mis productos"} products={usersProducts}/>
        </main>
    )
}
