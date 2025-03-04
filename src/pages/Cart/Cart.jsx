import styles from "./Cart.module.css";
// import { useEffect, /*useState*/ } from 'react';
import { useSelector } from 'react-redux';
// import { fetchMyProducts } from '../../services/fetchMyProducts.js';
// import { deleteUsersProduct, setProducts, setUsersProducts } from '../../store/slices/productsSlice.js';
// import Container from "../../Components/Container/Container.jsx";
import { Link } from "react-router-dom";
import CartCard from "../../Components/CartCard/CartCard.jsx";
import NoContentComponent from "../../Components/NoContentComponent/NoContent.jsx";
import Container from "../../Components/Container/Container.jsx";
// import Sections from "../../Components/Sections/Sections.jsx";
// import { deleteProduct } from "../../services/deleteProduct.js";
// import { fetchProducts } from "../../services/fetchProducts.js";



// eslint-disable-next-line react/prop-types
export default function Cart(){

    const {productsToBuy} = useSelector((state) => state.cart); //ACá temgo que llamar el estado global carrito
    console.log(productsToBuy, "soy el estado carrito")

    const sectionId = "Mi Carrito"


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
                        productsToBuy.map(el => (
                            <CartCard key={el.id} name={el.product_name} imageUrl={el.product_image} price={el.price} sectionId={el.category} quantity={el.quantity} id={el.product} my_products={location.pathname} handleDelete={""} handleEdit={""}/>
                        )) 
                        : <NoContentComponent />
                    }
                    </div>
                </Container>
            </section>
        </main>
        
    )
}
