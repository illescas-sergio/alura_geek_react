import { useDispatch, useSelector } from "react-redux";
import Container from "../../Components/Container/Container";
import styles from "./ProductDetail.module.css";
import ButtonsConsole from "../../Components/ButtonsConsole/ButtonsConsole";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton.jsx";
import BuyButton from "../../Components/BuyButton/BuyButton.jsx";
import SimilProds from "../../Components/SimilProds/SimilProds.jsx";
import { fixedPrice } from "../../helpers/fixedPrice.js";
import { addProductToCart } from "../../store/slices/productsCartSlice.js";
import fetchAddToCart from "../../services/fetchAddToCart.js";
import { useNavigate } from "react-router";
import fetchGetCartItems from "../../services/fetchGetCartItems.js";





export default function ProductDetail(){  
    
    const {detail} = useSelector(state => state.products);
    const {isLoggedIn} = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productData = {
        product_id: detail.id,
        quantity: 1
    }

    const handleAddProductToCart = (data) => {
        
        return fetchAddToCart(data)
        .then(data => {
            if(data.ok){
                try {
                    fetchGetCartItems()
                    .then(data => {
                        const elements = data.json();
                        return elements
                    })
                    .then(results => {
                        if(data.ok){
                            dispatch(addProductToCart(results))
                        }
                    })
                    .then(() => {
                        return navigate("/cart")
                    })
                    
                    
                } catch(error){
                    console.error(error)
                }
            }
        })
        
    }


    
    return (
        <main className={styles.detalle__producto}>
            <div className={styles.detalle__productoDiv}>            
                <section className={styles.detalle__producto__principal} >
                    <Container>
                        <div className={styles.detalle__producto__principalDiv}>
                            <div className={styles.detalle__producto__principalImg}>
                                <img src={detail.product_image} alt="" />
                            </div>
                            <div className={styles.detalle__producto__principalDescripcion}>                                
                                <div className={styles.detalle__producto__titulo}>{detail.product_name}</div>
                                <div className={styles.detalle__producto__precio}>${fixedPrice(detail.price)}</div>
                                <div className={styles.detalle__producto__descripcion}>{detail.product_description}</div>
                            </div>
                        </div>
                    </Container> 
                </section>

                <ButtonsConsole>
                    {
                        isLoggedIn && <AddToCartButton productData={productData} handleAddProductToCart={handleAddProductToCart}/>
                        // Tiene que aparecer un alerta, o algo así, que diga "producto agregado al carrito"
                    }
                                        
                    <BuyButton />
                </ButtonsConsole>

                <SimilProds category={detail.category}/>

            </div>
        </main>
    )
}