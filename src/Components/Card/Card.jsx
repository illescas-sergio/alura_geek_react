/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { fetchProductDetails } from "../../services/fetchProductDetails";
import {useDispatch} from "react-redux";
import { setDetail } from "../../store/slices/productsSlice"


export default function Card({id, name, price, imageUrl}){

    const dispatch = useDispatch()


    const handleClick = (idProducto) => {
        
        fetchProductDetails(idProducto)
        .then(resp => resp.json())
        .then(data => {
            
            dispatch(setDetail(data))
        })

    }

    return (
        <div className={styles.products__cards}>
            <div className={styles.card__img} >
                <img className={styles.cardImg} src={imageUrl} alt={name} />
            </div>
            <div className={styles.card__title}>{name}</div>
            <div className={styles.card__price}>{price}</div>
            <Link onClick={() => handleClick(id)} className={styles.card__details} to={`/product/${id}`}>Ver producto</Link>
        </div>
    )
}