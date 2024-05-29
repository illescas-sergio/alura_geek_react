/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { fetchProductDetails } from "../../services/fetchProductDetails";
import {useDispatch} from "react-redux";
import { setDetail } from "../../store/slices/productsSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



export default function Card({id, name, price, imageUrl, my_products = null, handleDelete}){

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
                {
                    my_products && <div className={styles.editIcon} onClick={()=> console.log(`click en editar producto ${id}`)}><Link to={`/product/edit/${id}`}><FontAwesomeIcon icon={faPencil} /></Link></div>
                }
                {
                    my_products && <div className={styles.deleteIcon} onClick={() => handleDelete(id)}><FontAwesomeIcon icon={faTrash} /></div>
                }
                <img className={styles.cardImg} src={imageUrl} alt={name} />
            </div>
            <div className={styles.card__title}>{name}</div>
            <div className={styles.card__price}>{price}</div>
            <Link onClick={() => handleClick(id)} className={styles.card__details} to={`/product/${id}`}>Ver producto</Link>
            {/* {
                my_products && (<div><Link onClick={() => handleClick(id)} className={styles.card__details} to={`/product/editar/${id}`}>Editar</Link> <Link onClick={() => handleClick(id)} className={styles.card__details} to={`/product/eliminar/${id}`}>Eliminar</Link></div>)
            } */}

        </div>
    )
}