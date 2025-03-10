/* eslint-disable react/prop-types */
import styles from './CartCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProductDetails } from "../../services/fetchProductDetails";
import {useDispatch} from "react-redux";
import { setDetail } from "../../store/slices/productsSlice"




// eslint-disable-next-line no-unused-vars
export default function CartCard({id, name, price, imageUrl, quantity, handleDeleteFromCart, itemId, handleQuantityChange}){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (idProducto) => {
        fetchProductDetails(idProducto)
        .then(resp => resp.json())
        .then(data => {
            dispatch(setDetail(data))
            navigate(`/product/${id}`)
        })
    }

    const priceFixed = price.toFixed(2)

    return (

      
    <div className={styles.products__card}>
        <div className={styles.card__img} >
            <img className={styles.cardImg} src={imageUrl} alt={name} />
        </div>
        <div className={styles.card__details__area}>
            <div className={styles.card__title}>{name}</div>
            <div className={styles.details__link}>
                <Link onClick={() => handleClick(id)} className={styles.card__details}>Ver producto</Link>
            </div>
        </div>
        <div className={styles.card__details__area}>
            <div className={styles.card__priceTitle}>
                Precio
            </div>
            <div className={styles.card__price}>{priceFixed}</div>
        </div>
        <div className={styles.card__quantity__area}>
            <div className={styles.card__priceTitle}>Cantidad</div>
            <div className={styles.card__price}>{quantity}</div>
            <div className={styles.quantityButtonsDiv}>
                    <button value={"-"} onClick={(e) => handleQuantityChange(e, itemId)}> - </button>
                    <button value={"+"} onClick={(e) => handleQuantityChange(e, itemId)}> + </button>
            </div>

            <button className={styles.profile__button} onClick={() => handleDeleteFromCart(itemId, id)}>Eliminar</button>

        </div>
        <div className={styles.card__details__area}>
            <div className={styles.card__priceTitle}>SubTotal</div>
            <div className={styles.card__price}>{"300"}</div>
        </div>
    </div>
    )
}