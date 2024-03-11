/* eslint-disable react/prop-types */
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name, price, imageUrl}){

    return (
        <div className={styles.products__cards}>
            <div className={styles.card__img} >
                <img className={styles.cardImg} src={imageUrl} alt={name} />
            </div>
            <div className={styles.card__title}>{name}</div>
            <div className={styles.card__price}>{price}</div>
            <Link className={styles.card__details} to={'/detail/:id'}>Ver producto</Link>
        </div>
    )
}