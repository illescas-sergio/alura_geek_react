import styles from "./Cart.module.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchMyProducts } from '../../services/fetchMyProducts.js';
// import { deleteUsersProduct, setProducts, setUsersProducts } from '../../store/slices/productsSlice.js';
// import Container from "../../Components/Container/Container.jsx";
import { Link } from "react-router-dom";
import CartCard from "../../Components/CartCard/CartCard.jsx";
import NoContentComponent from "../../Components/NoContentComponent/NoContent.jsx";
import Container from "../../Components/Container/Container.jsx";
import { deleteProductFromCart, /*modifyProductQuantity*/ } from "../../store/slices/productsCartSlice.js";
import fetchDeleteFromCart from "../../services/fetchDeleteFromCart.js";
import fetchGetCartItems from "../../services/fetchGetCartItems.js";
import { addProductToCart } from "../../store/slices/productsCartSlice.js";
import fetchAdjustProductQuantity from "../../services/fetchAdjustProductQuantity.js";
// import Sections from "../../Components/Sections/Sections.jsx";
// import { deleteProduct } from "../../services/deleteProduct.js";
// import { fetchProducts } from "../../services/fetchProducts.js";


// eslint-disable-next-line react/prop-types
export default function Cart(){

    const {productsToBuy} = useSelector((state) => state.cart); //ACá temgo que llamar el estado global carrito
    const dispatch = useDispatch();

    const sectionId = "Mi Carrito"

    const handleDeleteFromCart = (id, product) => {
        return fetchDeleteFromCart(id)
        .then(resp => {
            if(resp.ok){
                dispatch(deleteProductFromCart(product))
                fetchGetCartItems()
                .then(resp => resp.json())
                .then(data => {
                    dispatch(addProductToCart(data.items))
                })
            }
        })
    }

    const handleQuantityChange = (e, itemId) => {
            const op = e.target.value;
            const quantityAdjustment = 1;
            const currentQuantity = productsToBuy.find(el => el.id === itemId).quantity;
            let updatedQuantity = currentQuantity;
            if(op === "+"){
                updatedQuantity = currentQuantity + quantityAdjustment;   
            }
            if(op === "-"){
                updatedQuantity = currentQuantity - quantityAdjustment;   
            }
            fetchAdjustProductQuantity(itemId, updatedQuantity)
                    .then(resp => {
                    if(resp.ok){
                        fetchGetCartItems()
                        .then(resp => resp.json())
                        .then(data => {
                            dispatch(addProductToCart(data.items))
                        })
                    }
                })
                .catch(err => {
                    throw new Error(err.message)
                })
        }

    useEffect(() => {
        console.log(productsToBuy)
    }, [productsToBuy])

    return (
        <main className={styles.productos}>
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
                        productsToBuy.length ? 
                        productsToBuy.map(el => (<CartCard key={el.id} name={el.product_name} imageUrl={el.product_image} price={el.price} sectionId={el.category} quantity={el.quantity} id={el.product} itemId={el.id} my_products={location.pathname} handleDeleteFromCart={handleDeleteFromCart} handleQuantityChange={handleQuantityChange} handleEdit={""}/>)
                        ) 
                        : <NoContentComponent />
                    }
                    </div>
                </Container>
            </section>
        </main>
        
    )
}
