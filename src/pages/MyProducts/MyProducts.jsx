import styles from "./MyProducts.module.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyProducts } from '../../services/fetchMyProducts.js';
import { deleteUsersProduct, setProducts, setUsersProducts } from '../../store/slices/productsSlice.js';
import Container from "../../Components/Container/Container.jsx";
// import ShowSection from "../../Components/ShowSection/ShowSection.jsx";
import Card from "../../Components/Card/Card.jsx";
import ButtonsConsole from "../../Components/ButtonsConsole/ButtonsConsole.jsx";
import { Link, useLocation } from "react-router-dom";
import AddProductButton from "../../Components/AddProductButton/AddProductButton.jsx";
import { deleteProduct } from "../../services/deleteProduct.js";
import { fetchProducts } from "../../services/fetchProducts.js";
import NoContentComponent from "../../Components/NoContentComponent/NoContent.jsx";



// eslint-disable-next-line react/prop-types
export default function MyProducts(){

    const {usersProducts} = useSelector((state) => state.products);

    const sectionId = "Mis productos"
    
    const dispatch = useDispatch();
    
    const location = useLocation();

    useEffect(() => {

        fetchMyProducts()
        .then(resp => {
            console.log(resp)
            return  resp.json()
        } )
        .then(data => {
            console.log("soy data", data)
            dispatch(setUsersProducts(data));
        })
        .catch(err => console.log(err));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{
        console.log("cambió el estado")
    },[usersProducts])

    const handleDelete = (id) => {
        deleteProduct(id)
        .then(data => {
            console.log(data)
            console.log(id)
            dispatch(deleteUsersProduct(id))
        })
        .then(() => {
            fetchProducts()
            .then(resp => resp.json())
            .then(data => {
                
                dispatch(setProducts(data))
            });
        })
        .catch(err => console.log(err))
    }
     
    const handleEdit = () => {
        console.log("soy handle edit")
    }

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
                    {
                        usersProducts.length ? (
                            <div className={styles.products__items}>
                                {
                                     usersProducts.map(el => (
                                        <Card key={el.id} name={el.product_name} imageUrl={el.product_image} price={el.price} sectionId={el.category} description={el.product_description} id={el.id} my_products={location.pathname} handleDelete={handleDelete} handleEdit={handleEdit}/>
                                    ))
                                    
                                }
                            </div>
                        ) : <NoContentComponent />
                            
                            
                    }                    
                </Container>  
            </section>
                <ButtonsConsole>
                    <AddProductButton className={styles.addProductButton}/>
                </ButtonsConsole>
        </main>
        
    )
}
