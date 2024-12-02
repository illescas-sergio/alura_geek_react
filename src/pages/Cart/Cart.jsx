import styles from "./Cart.module.css";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { fetchMyProducts } from '../../services/fetchMyProducts.js';
// import { deleteUsersProduct, setProducts, setUsersProducts } from '../../store/slices/productsSlice.js';
import Container from "../../Components/Container/Container.jsx";
import { Link } from "react-router-dom";
import CartCard from "../../Components/CartCard/CartCard.jsx";
// import Sections from "../../Components/Sections/Sections.jsx";
// import { deleteProduct } from "../../services/deleteProduct.js";
// import { fetchProducts } from "../../services/fetchProducts.js";



// eslint-disable-next-line react/prop-types
export default function Cart(){

    const {productsToBuy} = useSelector((state) => state.cart); //ACá temgo que llamar el estado global carrito
    
    // const dispatch = useDispatch();

    useEffect(() => {

        console.log(productsToBuy)

    //     fetchMyProducts()
    //     .then(resp => {
    //         console.log(resp)
    //         return  resp.json()
    //     } )
    //     .then(data => {
    //         console.log("soy data", data)
    //         dispatch(setUsersProducts(data));
    //     })
    //     .catch(err => console.log(err));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(()=>{
    //     console.log("cambió el estado")
    // },[usersProducts])

    // const handleDelete = (id) => {
    //     deleteProduct(id)
    //     .then(data => {
    //         console.log(data)
    //         console.log(id)
    //         dispatch(deleteUsersProduct(id))
    //     })
    //     .then(() => {
    //         fetchProducts()
    //         .then(resp => resp.json())
    //         .then(data => {
                
    //             dispatch(setProducts(data))
    //         });
    //     })
    //     .catch(err => console.log(err))
    // }
     
    // const handleEdit = () => {
    //     console.log("soy handle edit")
    // }

    return (
        <main className={styles.productos}>
            <section className={styles.products__group}>
                <Container>
                    <div className={styles.products__menu}>
                        <h3 className={styles.products__title}>{}</h3>
                        <div>
                            <Link to={"/home"}><button className={styles.products__ver}><div>Volver</div><div className={styles.products__verFlecha}></div></button></Link>
                        </div> 
                    </div>
                    <div className={styles.products__items}>
                    {
                        productsToBuy.map(el => (
                            <CartCard key={el.id} name={el.product_name} imageUrl={el.product_image} price={el.price} sectionId={el.category} quantity={el.product_quantity} description={el.product_description} id={el.id} my_products={location.pathname} handleDelete={""} handleEdit={""}/>
                        ))
                    }
                    </div>
                </Container>  
            </section>
        </main>
        
    )
}
